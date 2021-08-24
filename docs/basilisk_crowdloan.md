---
id: basilisk_crowdloan
title: Basilisk Crowdloan
---

Kusama parachain müzayedeleri için Basilisk kitle kredisi şimdi yayında! Kitle kredisi kampanyamıza katılarak ve parachain yuvası süresince kilitli kalacak bir miktar KSM jetonu sözü vererek Basilisk'i destekleyebilirsiniz. Karşılığında, fırsat maliyetlerinizi karşılamak için size **cömert BSX ödülleri artı bir HDX bonusu** verilecektir. Parachain yuvasının süresi dolduğunda, KSM jetonlarınızı tam olarak geri alacaksınız. Aynısı, Basilisk'in aşağıda belirtilen kitle kredisi kampanyası son tarihi içinde bir parachain yuvası kazanmayı başaramadığı olası olmayan senaryo için de geçerlidir.

[Crowdloan sayfamızı](https://loan.bsx.fi) ziyaret ederek doğrudan katılabilirsiniz. Ayrıca süreç boyunca size rehberlik edecek [adım adım kitle kredisi kılavuzumuza](/crowdloan_guide) göz atabilirsiniz. Alternatif olarak, [Kraken aracılığıyla Basilisk kitle kredisine katılabilirsiniz](https://www.kraken.com/learn/parachain-auctions).

Bu gönderide, Basilisk kitle kredisinin genel ayrıntılarını ve ödül mekanizmasının nasıl çalıştığına dair daha ayrıntılı bilgileri bulacaksınız. Proje hakkında daha fazla bilgi edinmek isteyen yeni biriyseniz, [parachains](/parachains), [parachain açık artırmaları](/parachain_auctions) ve [ kitle kredileri](/ kitle kredileri).

## Crowdloan Ayrıntıları {#crowdloan-details}

* Parachain süresi: **48 hafta**
* Hedef parachain yuvası: **#4** (**06-13 Temmuz 2021** döneminde açık artırmaya çıkarılmıştır)
* Kitle kredisi üst sınırı: **200.000 KSM**
* Toplam BSX ödülleri: **15,000,000,000 BSX** (toplam arzın %15'i)
* Maksimum HDX ödülleri: **56.873.469 HDX**
* Kitle kredisi kampanyası için son tarih: **23 Temmuz 2021**
* Hak kazanma süresi: BSX ödülleri ve HDX bonusları doğrusal olarak dağıtılır. Dağıtım, Basilisk LBP etkinliği sona erdikten sonra başlayacak (parachain yuvasının güvence altına alınmasından ~2 hafta sonra) ve parachain yuvası sona ermeden 1 hafta öncesine kadar devam edecek.
## Ödül Mekanizması {#ödül mekanizması}

Basilisk bir parachain yuvasını güvence altına aldıktan sonra tüm topluluk destekçileri kitle kredisine katıldıkları için ödüllendirilir. Mevcut ödüller, katkı sırasında kitle kredisinin durumuna bağlı olarak farklı bir oranda dağıtılan BSX ve HDX jetonlarından oluşur. Ödül mekanizması, Basilisk paydaşlarının çıkarları göz önünde bulundurularak tasarlanmıştır. Amaç, parachain yuvası için fazla ödeme yapmamak, böylece destekçiler için fırsat maliyetlerini en aza indirmek ve potansiyel geleceği en üst düzeye çıkarmaktır. Aşağıda, açıklanan BSX ve HDX ödül mekanizmalarını bulacaksınız.


### BSX Ödülleri {#bsx-rewards}
Her katılımcının alacağı BSX ödüllerinin miktarı, yalnızca kitle kredisi kampanyasının sonunda Basilisk bir parachain yuvası sağladıktan sonra belirlenebilir. Ödüllerin hesaplanması iki adımdan oluşur.

İlk olarak, tüm KSM katkıları bir ödül çarpanı kullanılarak tartılır. Çarpanın, katkının yapıldığı zamana bağlı olarak 1 ile 0** arasında bir kayan nokta **değeri vardır. **1.0** ödül çarpanı, **4 numaralı hedef açık artırmanın kapanmaya başlamasından önce taahhüt edilen tüm KSM için geçerlidir (8 Temmuz kabaca 09:00 GMT'de)**. Bundan sonra çarpan, müzayede kapanış saatinde (13 Temmuz saat 09.00 GMT) **0'a ulaşana kadar doğrusal olarak azalmaya başlar. Toplam taahhüt edilen KSM, 4 numaralı açık artırmada bir slot kazanmak için yeterli değilse, o zaman aşağıdaki **5 numaralı açık artırma yeni hedef açık artırma** olacaktır. Buna göre, önceki açık artırma #4 sırasında taahhüt edilen tüm KSM'lerin çarpanı 1'e sıfırlanacaktır.

Yukarıda açıklanan prosedür kullanılarak ağırlıklı KSM katkıları belirlendikten sonra, bireysel ödüllerin tam miktarı hesaplanır. Ödül miktarı, aşağıdaki formülde gösterildiği gibi, tüm ağırlıklı KSM katkılarıyla ilgili olarak ağırlıklı bireysel katkının oranına göre belirlenir:

```
rewards = (weighted_indivudial_contribution / total_weighted_contributions) * crowdloan_cap
```

Parachain yuvası gerçekten kazanılana kadar ödüllerin tam miktarını belirleyemesek de, herhangi bir katkı için minimum BSX ödül miktarını hesaplamak mümkündür. Bu, kitle kredisinin maksimum 200.000 KSM sınırına ulaşmayı başaracağı ve tüm katkıların en yüksek ödül çarpanının 1,0 olacağı varsayımları altında yapılabilir. Bu, elbette, pek olası olmayan bir senaryodur, ancak Crowdloan kullanıcı arayüzünde, katkıda bulunanların KSM'leri karşılığında bekleyebilecekleri minimum BSX jeton miktarını belirtmemize olanak tanır.

### HDX Bonusu {#hdx bonusu}

Zamanında desteği daha da teşvik etmek için, tüm kitle kredisi destekçileri, KSM katkılarının **fırsat maliyetlerinin %5-30'unu** kapsayan ek HDX bonusu alacaklardır. ~11 aylık bir kilitlenme dönemi için, bu fırsat maliyetlerinin şu anda **%13,75** olduğu tahmin edilmektedir (KSM hissesi için %15 APY'ye dayalı olarak).

Ayrıca burada, karşılanacak fırsat maliyetlerinin tam yüzdesi, KSM katkısının yapıldığı andaki kitle kredisinin durumuna göre belirlenir. Basilisk bir parachain yuvası için ana rakibinin gerisinde kalırken, HDX bonus çarpanı **maksimum 0,3** olacak. Basilisk ana rakibe karşı liderliği ele geçirdiğinde, bonus çarpanı **minimum 0,05**'e doğru doğrusal olarak azalmaya başlayacaktır. Basilisk yarışta %10 veya daha fazla lider olduğunda bu minimuma ulaşılır.

Yukarıdakiler dikkate alınarak, bireysel katkı için ikramiye miktarı (KSM cinsinden) aşağıdaki formül kullanılarak hesaplanır:

```
bonus_in_KSM = contributed_KSM * opportunity_costs * bonus_multiplier
```

Sonunda, bonus, 1 HDX için bilinen son tarihsel fiyat olan 0.08059 $ kullanılarak HDX'e dönüştürülür.


## BSX Değerlemesi {#bsx-değerlemesi}

Son olarak, yerel BSX belirtecinin değerlemesi hakkında birkaç söz söylemek istiyoruz. Bir para zincirinin değerlemesini belirlemenin kabul edilen bir yolu, parachain yuvasının süresi boyunca taahhüt edilen KSM'nin kilitlenmesiyle ortaya çıkan fırsat maliyetlerine atıfta bulunmaktır. Yukarıda belirtildiği gibi, bu fırsat maliyetlerinin %13,75 olduğu tahmin edilmektedir. BSX tokeninin fiyatı daha sonra aşağıdaki formül kullanılarak hesaplanabilir:

```
BSX_price_in_KSM = total_opportunity_costs_in_KSM / total_BSX_rewards
```

Bunun pratikte nasıl görüneceğine dair bir örnek vermek gerekirse, Basilisk kitle kredisinin 200.000 KSM hedefine ulaşacağı varsayımıyla çalışabiliriz. Bu, 27.500 KSM'lik toplam fırsat maliyetini gerektirecektir. Yukarıdaki formülü uyguladığınızda, 1 BSX, 0,0000018333 KSM veya kabaca 0,000384993 ABD Doları (210 ABD Doları KSM fiyatıyla) tutarında olacaktır.

Yukarıdaki örnek yalnızca açıklama amacıyla verilmiştir. Kitle kredisi kampanyası başarıyla tamamlanana kadar BSX'in gelecekteki fiyatını herhangi bir doğrulukla tahmin etmek mümkün değildir..
