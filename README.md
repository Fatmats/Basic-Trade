Görev listesi 

- "Register Service Worker" paketinin görevini açıklayınız.

  > Oluşturduğumuz web sayfalarını mobil de sanki mobil uygulama gibi çalışmasını sağlayan pakettir. Bu paket ile web uygulama geliştirdiğimiz takdirde kişi mobilden uygulamayı ana sayfasına ekleyebilir ve Web uygulaması için seçtiğiniz icon mobil telefonunda uygulama ymiş gibi yer alacaktır. Aynı zamanda kullanıcılar PWA ile oluşturulmuş web sayfanızı açtığında sanki web sayfası değil de mobil bir uygulama kullanıyormuş hissi verir. Bundan dolayı ekstra bir mobil uygulama yapma maliyetini en aza indirir. Her daim günceldir ve güvenilirdir. Düşük internet bağlantısıyla çalişabilir. Bunun nedeni verileri telefonun hafızasına yükler ve her seferinde çalıştırmak yerine sadece değişiklik olduğunda çalışır.

  * 1. Ad, soyad, adres, mail adresi, il, ilçe ve grup(multiselect (opsiyonlar herhangi bir şey olabilir)) elementlerini barındıran bir form ve bu form elementlerinin değişikliklerinin aynı sayfa üzerinde gösterildiği alanların yapılması. 
   * 2. "Kaydet" butonu ile bu verilerin json formatında POST edilmesi
  * tüm kayıtların listelendiği bir alan ve liste sayfasından detaylarına ulaşılabilen ve değişiklik imkanı sunan bir sayfa (bu sayfa üzerinden silme imkanı da vermeliyiz.)
  * tüm kayıtlarda arama yaparak sonuçların listelendiği bir sayfa


  ## Notlar
  * 1. Verileri Json formatında db/db.json dosyasında bulabilirsiniz
  * 2. Arama kısmından ve kullanıcının kimligine bastığınızda detay sayfasına gider orada silme ve düzenleme işlemi yapılabilir
  * 3. Kurmak için 
```
npm install
```

Çaliştimak için
```
npm run serve
```
    satırlarını takip ediniz....
### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
