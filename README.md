# Basic Whatsapp Project with Node.js

Bu proje, Node.js ile geliştirilmiş basit bir WhatsApp benzeri bir mesajlaşma uygulamasıdır.

## Proje Tanımı

Bu uygulamanın ilk sayfası giriş ekranıdır. Kullanıcılar bu ekran üzerinden giriş yaparlar. Varsayılan kullanıcılar ve şifreleri aşağıdaki gibidir:

- Kullanıcı adı: Deniz, Şifre: 123
- Kullanıcı adı: John, Şifre: 123
- Kullanıcı adı: Max, Şifre: 123

## Kurulum

1. Bu projeyi klonlayın: `git clone https://github.com/denizilgin/chat-website.git`
2. Proje dizinine gidin: `cd chat-website`
3. Bağımlılıkları yükleyin: `npm install` , `npm express`
4. MySQL Workbench uygulamasını yükleyin.
5. Dump20240419 veritabanı dosyasını MySQL Workbench uygulamasına import edin ve veritabanı sunucusunu başlatın.
6. Uygulamayı başlatın: `node app.js`

## Kullanım

1. Tarayıcınızda `http://localhost:4000` adresine gidin.
2. Varsayılan kullanıcı adı ve şifre ile giriş yapın.
3. Mesajlaşmaya başlayın!
4. Eş zamanlı sohbet özelliğini denemek için yeni bir tarayıcıda farklı hesap ile giriş yapabilirsiniz.

## Proje özellikleri.
1. Mesajlarınız her sohbetin sahip olduğu özel anahtarın altında veritabanına kaydedilmektedir. Uygulamaya sonradan giriş yapsanız bile mesajlarınız kaybolmamaktadır.
2. ![image](https://github.com/Denizilgin/chat-website/assets/36126098/87a97481-995b-4531-a3ed-328111eef4dd)
3. ![image](https://github.com/Denizilgin/chat-website/assets/36126098/bdd11c1d-03b5-4db5-90ae-eaea68e53494)
4. Giriş yapmamış bir kullanıcı veya bu sohbetten olmayan bir kullanıcı özel sohbet anahtarına sahip olsa bile sohbete erişememektedir.
5. Fotoğrafta John ve Deniz dışında bir kullanıcıyla bu sohbetin URL'sine gitmeyi denediğimizde (örn. Max)
6. ![image](https://github.com/Denizilgin/chat-website/assets/36126098/b97fd241-4f9f-4aa9-a83f-446aef794ab2)
   



