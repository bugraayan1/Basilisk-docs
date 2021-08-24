---
id: infra_testnet
title: Testnet Deployment
---

Bu makale, test ağımızın (Relay Chain + Parachain) otomatik dağıtımı için bir araya getirdiğimiz manifestoları ve diğer yaml konfigürasyonlarını paylaşmaktadır. Kubernetes'i kullanarak son teknoloji otomatik dağıtıma yönelik yolculuğumuz ve bu yolda almamız gereken teknik kararlarla ilgili daha fazla bilgi edinmek istiyorsanız [lütfen bu blog gönderisine göz atın](https://basiliskfi.substack. com/p/automation-of-our-testnet-deployment).

## Kullanılan teknolojiler {#teknolojiler}
* Kubernetes - esas olarak kolaylık nedeniyle bulutta (AWS Fargate) çalıştırıyoruz. Ancak, kendi K8s kümenizi döndürmek için yaml bildirimlerini uyarlayabilirsiniz.
* Terraform - çünkü alt yapımızı kod olarak kullanmayı seviyoruz.
* GitHub Eylemleri - CI/CD için.

## Küme yapılandırması {#cluster-config}

Kubernetes kümemizi AWS Fargate ile bulutta çalıştırmaya karar verdiğimiz için küme yapılandırması için aşağıdaki yaml bildirimini kullanabiliriz:

```yaml
apiVersion: eksctl.io/v1alpha5
kind: ClusterConfig

metadata:
  name: fargate-cluster
  region: ap-northeast-1

nodeGroups:
  - name: ng-1
    instanceType: m5.large
    desiredCapacity: 1

fargateProfiles:
  - name: fp-default
    selectors:
      # All workloads in the "default" Kubernetes namespace will be
      # scheduled onto Fargate:
      - namespace: default
      # All workloads in the "kube-system" Kubernetes namespace will be
      # scheduled onto Fargate:
      - namespace: kube-system
  - name: fp-dev
    selectors:
      # All workloads in the "dev" Kubernetes namespace matching the following
      # label selectors will be scheduled onto Fargate:
      - namespace: dev
        labels:
          env: dev
          checks: passed
```

Bunu hallettikten sonra, Relay Chain ve Parachain için gereken Kubernetes nesnelerini oluşturma ve uygulama zamanı geldi.

## Röle Zinciri {#alice}
Birincisi Alice'di. 3 tür nesne oluşturacağız: Dağıtım, Hizmet ve Giriş nesnesi.

### Dağıtım {#alice-dağıtım}
Bu bildirimde, düğümümüzün adını, açığa çıkarılacak bağlantı noktalarını, komutu ve argümanlarını ve ayrıca kopya sayısını seçiyoruz. Eşitleme sorunlarını önlemek için düğüm başına yalnızca bir kopya istediğimiz için bu parametre önemlidir. Gerektiği kadar çok düğümünüz olabileceğini unutmayın.

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  namespace: YOUR_NAMESPACE
  name: relaychain-alice-deployment
spec:
  selector:
    matchLabels:
      app.kubernetes.io/name: relaychain-alice
  replicas: 1
  template:
    metadata:
      labels:
        app.kubernetes.io/name: relaychain-alice
    spec:
      containers:
      - image: YOUR-IMAGE-HERE
        imagePullPolicy: Always
        name: relaychain-alice
        command: ["/polkadot/polkadot"]
        args: ["--chain", "/polkadot/config.json", ..."]
        ports:
        - containerPort: 9944
        - containerPort: 30333
```

### Hizmet {#alice-servis}
Kubernetes'te Service nesnesini burada en az iki amaç için kullanırız:
1. İlk olarak, düğümlerin birbirleriyle iletişim kurmasına izin vermek istiyoruz (lütfen [daha fazla bilgi için bu bağlantıya bakın](https://kubernetes.io/docs/concepts/services-networking/connect-applications-service/ )).
2. İkinci olarak, aşağıdaki adımda açıklandığı gibi bir Ingress nesnesi kullanarak hizmeti dış dünyaya sunabileceğiz.

```yaml
apiVersion: v1
kind: Service
metadata:
  namespace: YOUR_NAMESPACE
  name: SVC_NAME
spec:
  ports:
    - port: 9944
      name: websocket
      targetPort: 9944
      protocol: TCP
    - port: 30333
      name: custom-port
      targetPort: 30333
      protocol: TCP
  type: NodePort
  selector:
    app.kubernetes.io/name: relaychain-alice
```

Hizmeti dış dünyaya göstermek istiyorsanız, 'selector' parametresinin çok önemli bir rolü olduğunu lütfen unutmayın.

### Giriş {#alice-giriş}
Ingress nesnesi hizmetimizi dış dünyaya gösterir (bizim durumumuzda `relaychain.hidration.cloud` ana bilgisayar adresini kullanarak). Bu amaçla, AWS'nin ALB Denetleyici Hizmetini kullanıyoruz ([buradan daha fazla bilgi](https://docs.aws.amazon.com/eks/latest/userguide/alb-ingress.html)).

Ingress nesnesinin parametreleri oldukça basittir ve büyük ölçüde olduğu gibi tutulabilir ([buradan daha fazla bilgi](https://kubernetes-sigs.github.io/aws-load-balancer-controller/v2.2/) kılavuz/giriş/ek açıklamalar/)). Ayarlanması gereken en önemli değer, [ACM](https://docs.txt)'de bir giriş oluşturduğunuzda aldığınız ACM Sertifikasının tanımlayıcısı olan `alb.ingress.kubernetes.io/certificate-arn` değeridir. aws.amazon.com/acm/latest/userguide/acm-overview.html) "ana makineniz" için. Bu konuda daha fazla ayrıntı daha sonra.


```yaml
apiVersion: extensions/v1beta1
kind: Ingress
metadata:
  namespace: YOUR_NAMESPACE
  name: INGRESS_OBJECT_NAME
  annotations:
    kubernetes.io/ingress.class: alb
    alb.ingress.kubernetes.io/scheme: internet-facing
    alb.ingress.kubernetes.io/group.name: wstgroup2
    alb.ingress.kubernetes.io/load-balancer-attributes: idle_timeout.timeout_seconds=4000
    alb.ingress.kubernetes.io/auth-session-timeout: '86400'
    alb.ingress.kubernetes.io/target-type: ip
    alb.ingress.kubernetes.io/listen-ports: '[{"HTTP":443}, {"HTTPS":443}]'
    alb.ingress.kubernetes.io/healthcheck-path: /
    alb.ingress.kubernetes.io/healthcheck-port: '80'
    alb.ingress.kubernetes.io/target-group-attributes: stickiness.enabled=true,stickiness.lb_cookie.duration_seconds=600
    alb.ingress.kubernetes.io/certificate-arn: YOUR_ARN
  labels:
    app: relaychain
spec:
  rules:
    - host: relaychain.hydration.cloud
      http:
        paths:
          - path: /ws/
            backend:
              serviceName: relaychain-bob-svc
              servicePort: 80

```


## Parazincir {#bob}
Alice her şeyi ayarladıktan sonra, şimdi Bob'a bakma zamanı. Ayrıca burada aynı tür nesneleri yaratacağız: harmanlayıcı için bir Dağıtım, gerekli Hizmetler ve bir Giriş nesnesi.

### Dağıtım (düzenleyici) {#bob-dağıtım}
```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  namespace: YOUR_NAMESPACE
  name: parachain-coll-01-deployment
spec:
  selector:
    matchLabels:
      app.kubernetes.io/name: parachain-coll-01
  replicas: 1
  template:
    metadata:
      labels:
        app.kubernetes.io/name: parachain-coll-01
    spec:
      containers:
      - image: YOUR_IMAGE
        imagePullPolicy: Always
        name: parachain-coll-01
        volumeMounts:
          - mountPath: /tmp
            name: persistent-storage
        command: ["/basilisk/basilisk"]
        args: ["--chain", "local", "--parachain-id", "", "--alice", "--base-path", "/basilisk/", "--node-key", "", "--bootnodes", "/dns/coll-01-svc.YOUR_NAMESPACE.svc.cluster.local/tcp/30333/p2p/KEY", "--", "--chain", "/tmp/rococo-local-raw.json", "--bootnodes", "/dns/coll-01-svc.YOUR_NAMESPACE.svc.cluster.local/tcp/30333/p2p/KEY", "--base-path", "/basilisk/", "--execution=wasm"]
        ports:
        - containerPort: 9944
        - containerPort: 9933
        - containerPort: 30333
      volumes:
        - name: persistent-storage
          persistentVolumeClaim:
            claimName: efs-pv  
```

### Servis {#bob-servis}

```yaml
apiVersion: v1
kind: Service
metadata:
  namespace: NAMESPACE
  name: coll-01-svc
spec:
  ports:
    - port: 9944
      name: websocket
      targetPort: 9944
      protocol: TCP
    - port: 30333
      name: custom-port
      targetPort: 30333
      protocol: TCP
    - port: 9933
      name: rpc-port
      targetPort: 9933  
  type: NodePort
  selector:
    app.kubernetes.io/name: parachain-coll-01
```

### Herkese Açık RPC {#bob-rpc}

Bob durumunda, düğüme RPC bağlantıları için kullanılan '9944' bağlantı noktasını da göstermek istiyoruz.

```yaml
apiVersion: v1
kind: Service
metadata:
  namespace: NAMESPACE
  name: public-rpc-svc
spec:
  ports:
    - port: 80
      name: websocket
      targetPort: 9944
      protocol: TCP
  type: NodePort    
  selector:
    app.kubernetes.io/name: public-rpc
```
### Giriş {#bob-giriş}
Bob'un Giriş bildirimi, [yukarıdaki Alice](#alice-ingress) ile aynıdır.

## ACM ve Route53
Düğümünüzü güzel ve güvenli bir URL ile dış dünyaya göstermeniz gerekiyorsa, AWS ACM'yi kullanabilirsiniz. Temel olarak yapmanız gereken tek şey, URL'nizin adıyla bir sertifika oluşturmak, onu doğrulamak (DNS aracılığıyla) ve ARN sonucunu almaktır. Ardından, Giriş Bildirimi dosyanıza `alb.ingress.kubernetes.io/certificate-arn` parametresinin bir değeri olarak ekleyin ve voilà!

## Otomatik Tedarik için Terraform
Tabii ki, sertifikanızı CI'nizde otomatikleştirmek istemeniz durumunda Terraform aracılığıyla oluşturabilirsiniz (bu seçimi henüz yapmadık, ancak gelecekte yine de yapabiliriz). Biraz ilham almak için aşağıdaki `.tf` dosyasına göz atabilirsiniz:

```
provider "aws" {
  region = "eu-west-1"
}

# DNS Zone Name: hydraction.cloud
variable "dns_zone" {
  description = "Specific to your setup, pick a domain you have in route53"
  default = "hydration.cloud"
}
# subdomain name
variable "domain_dns_name" {
  description = "domainname"
  default     = "YOUR_SUBDOMAIN"
}


# On crée une datasource à partir du nom de la zone DNS
data "aws_route53_zone" "public" {
  name         = "${var.dns_zone}"
  private_zone = false
}
resource "aws_acm_certificate" "myapp-cert" {
  domain_name       = "${var.domain_dns_name}.${data.aws_route53_zone.public.name}"
  #subject_alternative_names = ["${var.alternate_dns_name}.${data.aws_route53_zone.public.name}"]
  validation_method = "DNS"
  lifecycle {
    create_before_destroy = true
  }
}
resource "aws_route53_record" "cert_validation" {
  for_each = {
    for dvo in aws_acm_certificate.myapp-cert.domain_validation_options : dvo.domain_name => {
      name   = dvo.resource_record_name
      record = dvo.resource_record_value
      type   = dvo.resource_record_type
    }
  }
  allow_overwrite = true
  name            = each.value.name
  records         = [each.value.record]
  ttl             = 60
  type            = each.value.type
  zone_id         = data.aws_route53_zone.public.id
}
# This tells terraform to cause the route53 validation to happen
resource "aws_acm_certificate_validation" "cert" {
  certificate_arn         = aws_acm_certificate.myapp-cert.arn
  validation_record_fqdns = [for record in aws_route53_record.cert_validation : record.fqdn]
}

output "acm-arn" {
  value = aws_acm_certificate.myapp-cert.arn
}

```

Bu TF'nin çıktı değeri, 'Giriş' bildirim dosyanızda kullanılacak ARN'dir.

## Github Eylemleri
Manifest'leri hazırladıktan sonra, her şeyi bir araya getirmenin ve tanımlanan Kubernetes nesnelerini dağıtmanın zamanı geldi. "kubectl application" kullanmak yerine, onu bir CI/CD ardışık düzenine entegre etmeye karar verdik. Github Eylemlerini kullanıyoruz ve oldukça basit:

```yaml
name: deploy app to k8s and expose
on:
  push: 
    branches:
      - main

jobs:
  deploy-prod:
    name: deploy
    runs-on: ubuntu-latest
    env:
      ACTIONS_ALLOW_UNSECURE_COMMANDS: true
      AWS_ACCESS_KEY_ID: ${{ secrets.K8S_AWS_ACCESS_KEY_ID }}
      AWS_SECRET_ACCESS_KEY: ${{ secrets.K8S_AWS_SECRET_KEY_ID }}
      AWS_REGION: ${{ secrets.AWS_REGION }}
      NAMESPACE: validators_namespace
      APPNAME1: validator1
      APPNAME2: validator2
      DOMAIN: hydration.cloud
      SUBDOMAIN: validator1
      IMAGENAME: YOUR_IMAGE
      CERTIFICATE_ARN: _CERTIFICATEARN_
    
    steps:
      - name: checkout code
        uses: actions/checkout@v2.1.0
      
      - name: run-everything
        run: |
          curl -LO https://storage.googleapis.com/kubernetes-release/release/$(curl -s https://storage.googleapis.com/kubernetes-release/release/stable.txt)/bin/linux/amd64/kubectl
          chmod +x ./kubectl
          sudo mv ./kubectl /usr/local/bin/kubectl
          export AWS_ACCESS_KEY_ID=${{ env.AWS_ACCESS_KEY_ID }}
          export AWS_SECRET_ACCESS_KEY=${{ env.AWS_SECRET_ACCESS_KEY }}
          curl --silent --location "https://github.com/weaveworks/eksctl/releases/latest/download/eksctl_$(uname -s)_amd64.tar.gz" | tar xz -C /tmp
          sudo mv /tmp/eksctl /usr/local/bin
          eksctl version
          aws eks --region eu-west-1 update-kubeconfig --name CLUSTER_NAME
          kubectl delete all --all -n ${{ env.NAMESPACE }}
          eksctl create fargateprofile --cluster CLUSTER_NAME --region ${{ env.AWS_REGION }} --name ${{ env.NAMESPACE }} --namespace ${{ env.NAMESPACE }}
          sed -i 's/_NAMESPACE_/${{ env.NAMESPACE }}/g' components.yaml
          kubectl apply -f components.yaml
```

Bu iş akışı, tüm Kubernetes nesnelerinizi içeren bildirim dosyasını seçilen Kümeye dağıttıktan sonra AWS Fargate profilini oluşturur. Doğru erişim ve gizli anahtarları sağlamayı unutmayın :)

İyi şanslar ve herhangi bir sorunuz varsa bize Discord'dan ulaşın!
