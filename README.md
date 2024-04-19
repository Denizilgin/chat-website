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
4. Uygulamayı başlatın: `node app.js`

## Kullanım

1. Tarayıcınızda `http://localhost:4000` adresine gidin.
2. Varsayılan kullanıcı adı ve şifre ile giriş yapın.
3. Mesajlaşmaya başlayın!
4. Eş zamanlı sohbet özelliğini denemek için yeni bir tarayıcıda farklı hesap ile giriş yapabilirsiniz.

## Proje özellikleri.
1. Mesajlarınız her sohbetin sahip olduğu özel anahtarın altında veritabanına kaydedilmektedir.
2. ![image](https://github.com/Denizilgin/chat-website/assets/36126098/bdd11c1d-03b5-4db5-90ae-eaea68e53494)
3. Giriş yapmamış bir kullanıcı veya bu sohbetten olmayan bir kullanıcı özel sohbet anahtarına sahip olsa bile sohbete erişememektedir.
4. Fotoğrafta John ve Deniz dışında bir kullanıcıyla bu sohbetin URL'sine gitmeyi denediğimizde (örn. Max)
5. ![image](https://github.com/Denizilgin/chat-website/assets/36126098/b97fd241-4f9f-4aa9-a83f-446aef794ab2)
   


