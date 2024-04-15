const express = require('express');
const app = express();
const fs = require('fs');
const http = require('http').Server(app);
const io = require('socket.io')(http); 
const mysql = require('mysql');
const qs = require('querystring');
const bodyParser = require('body-parser');
const path = require('path');


app.use(bodyParser.json());
app.set('view engine' , 'ejs');
app.set('views', './views');
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));

//! Veritabanı Bağlantısı
const db = require('./database');

app.use(bodyParser.urlencoded({ extended: false }));

//* BURASI SİTENİN ANASAYFASINI TANIMLADIĞIMIZ YER
app.get('/', (req, res) => {
    res.render('giris');    
});

//* Sohbetin seçildiği yer.
const {handleMainRequest} = require('./mainHandler');
app.get('/index', handleMainRequest);
app.post('/index',handleMainRequest);

//* Sohbet Sayfası

const{handleSohbetRequest} = require('./sohbetHandler');
app.get('/sohbet/:sohbetKey',handleSohbetRequest);
app.post('/sohbet/:sohbetKey', handleSohbetRequest);

const { mesajAt } = require('./sohbetHandler');
app.post('/mesaj-gonder', mesajAt);


io.on('connection', (socket) => {
    console.log('Bir istemci bağlandı.');

    // Yeni bir mesaj geldiğinde
    socket.on('yeniMesaj', (mesaj) => {
        console.log('Yeni mesaj:', mesaj);
        
        // Bu mesajı tüm istemcilere gönder
        io.emit('yeniMesaj', mesaj);
    });
});

http.listen(4000, () => {
    console.log('Sunucu çalışıyor. Port: 4000');
});