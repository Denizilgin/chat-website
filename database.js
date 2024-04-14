const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Deniz123gs.',
    database: 'chat_sitesi'
});

db.connect((err)=>{
    if(err){
        console.error('Veritabanına bağlanılamadı.' + err.stack);
        return;
    }
    console.log("Bağlantı Başarılı");
});

module.exports = db;