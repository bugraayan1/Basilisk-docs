---
id: parachain_auctions
title: Parachain Auctions
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Parachain müzayedeleri, Kusama'daki mevcut [parachain](/parachains) slotlarını en uygun adaylara dağıtmak için bir mekanizma sağlar. Bu makale, iki soruyu inceleyerek parachain müzayedelerini tanıtıyor: Neden parachain müzayedelerimiz var ve bunlar nasıl çalışıyor?

## Neden? {#Niye}

Kusama ve Polkadot, aynı anda röle zincirlerine bağlı sınırlı sayıda parachain'i destekleyebilir. Polkadot için uzun vadeli hedef 100 parachain, Kusama ise partiyi ilk turda 5 parachain ve kısa bir süre sonra takip edecek 5 parachain ile başlatıyor.

Bu arka plana karşı, parachain müzayedeleri, mevcut slotları en uygun parachain adaylarına dağıtarak kıtlıkla başa çıkmak için piyasa açısından verimli bir araç olarak tanıtıldı.


## Parachain Müzayedeleri nasıl çalışır? {#nasıl}

Parachain slotları 1 hafta süreli ayrı müzayedelerde tek tek sunulmaktadır. Bu süre zarfında, aday projeler istedikleri süre boyunca bir parachain yuvasına teklif verebilirler. Mevcut slotlar 6 haftalık kiralama sürelerine bölünmüştür. Bir parachain yuvasının maksimum süresi 48 haftadır (8 * 6 hafta). Aşağıda, ilk 5 Kusama slotu için müzayede programını görebilirsiniz.

<div style={{textAlign: 'center', marginBottom: '2rem'}}>
  <img alt="create-account" src={useBaseUrl('/img/parachain-auctions/ksm-schedule.jpg')}  />
</div>

Açık artırmanın galibi, açık artırmanın kapanış anında parachain yuvası süresince **kilitlenecek en yüksek KSM miktarını** teklif eden parachain adayıdır. Bununla birlikte, Kusama, müzayedenin kapanış anının **başlangıçta bilinmediği** **mum müzayede mekanizması** olarak adlandırılan mekanizmayı kullandığından, bu çok basit olmayabilir.

Aşağıdaki resimde gösterildiği gibi, mum müzayedeleri bir başlangıç dönemi (1 gün 21 saat) ve bir bitiş döneminden (5 gün) oluşur. Adaylar her an tekliflerini sunabilirler, ancak resmi müzayede kapanış anı en sonunda 5 günlük bitiş süresi içinde rastgele bir an seçilerek belirlenir. O anda en yüksek teklifi veren aday, parachain yuvasının galibi olur.

<div style={{textAlign: 'center', marginBottom: '2rem'}}>
  <img alt="create-account" src={useBaseUrl('/img/parachain-auctions/auction-mechanism.jpg')}  />
</div>

Bu açık artırma mekanizmasının arkasındaki mantık, daha doğru bir fiyat keşfini teşvik ederken açık artırma keskin nişancılığını önlemektir. Kitle kredisi destekçileri için bunun önemli bir anlamı vardır: KSM'nizi geç yerine erken kilitleyerek [Basilisk kitle kredisini](/basilisk_crowdloan) destekleyin. Bu şekilde, katkınızın Basilisk'in kazanan teklifine sayıldığından emin olursunuz.
