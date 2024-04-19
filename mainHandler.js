const app = require('./app');
const db = require('./database'); 



function handleMainRequest(req, res) {
    
    if(req.method == "POST")
    {
        const kullanici_adi = req.body.kullanici_adi;
        const sifre = req.body.sifre;
        const sql = 'SELECT * FROM kullanici_giris WHERE BINARY kullanici_adi = ? AND sifre = ?';
        db.query(sql,[kullanici_adi,sifre], (err,result) => {
            if(err) throw err;
            if(result.length > 0)
            {
                const kullanici_adi = req.body.kullanici_adi;
                const sohbetler_sql = "SELECT * FROM sohbetler WHERE user1_id = ?";
                db.query(sohbetler_sql ,[kullanici_adi],(err,result) =>{
                    if(err) throw err;
                    if(result.length > 0)
                    {
                        res.render('index',{kullanici_adi: kullanici_adi,sifre:sifre, sohbetler_sql: result}) //EJS'E VERİ GÖNDERMEK İÇİN res.render kullanıyoruz
                    }
                })
              
            }
        })
    }
    else if(req.method == 'GET')
    {
        res.status(400).json({ error: "Giriş yapmadınız" });
    }


}



module.exports = { handleMainRequest };