const { query } = require('express');
const app = require('./app');
const db = require('./database');



function handleSohbetRequest(req, res)
{
    const sohbetKey = req.params.sohbetKey;
    
    const kullanici_adi = req.body.kullanici_adi;
    const sifre = req.body.sifre;

    const giris_sql = 'SELECT kullanici_adi , sifre FROM kullanici_giris WHERE kullanici_adi = ? AND sifre = ?';
    db.query(giris_sql,[kullanici_adi,sifre],(err,result)=>{
        if(err) throw err;
        if(result.length > 0){
            const yazilar_sql = 'SELECT yazi, gonderen , alici ,sohbet_key FROM yazilar WHERE sohbet_key = ?';
            db.query(yazilar_sql,[sohbetKey], (err,result) =>{
                if(err) throw err;
                if(result.length > 0 )
                {
                    const sohbet_key = result[0].sohbet_key;
                    const gonderen = result[0].gonderen;
                    const alici = result[0].alici;
                    if(gonderen == kullanici_adi || alici == kullanici_adi)
                    {
                        if(gonderen == kullanici_adi)
                        {
                            res.render('sohbet',{sohbet_edilen_kisi: alici, yazilar_sql: result,sohbet_key: sohbet_key,kullanici:kullanici_adi});

                        }
                        else if (alici == kullanici_adi)
                        {
                            res.render('sohbet',{sohbet_edilen_kisi: gonderen,yazilar_sql: result,sohbet_key: sohbet_key, kullanici: kullanici_adi });
                        }
                        
                    }
                    else{ res.json("BU KONUŞMAYI GÖRMEYE YETKİNİZ YOK.")}
                }
            })
        }
        else{
            res.json("BU KONUŞMAYI GÖRMEYE YETKİNİZ YOK.")
        }
      
    })
   
}

function mesajAt(req, res)
{
    const yazi = req.body.yazi;
    const sohbet_key = req.body.sohbet_key;
    const gonderen = req.body.gonderen;
    const alici = req.body.alici;

    const mesajAt = {
        yazi: yazi, 
        sohbet_key: sohbet_key, 
        gonderen: gonderen,
        alici: alici
 };


    db.query('INSERT INTO yazilar SET ?' , mesajAt, function(err,result,fields){
      if(err) throw err;



    })
}

module.exports = {mesajAt,handleSohbetRequest};