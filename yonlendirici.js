var path = require('path');
var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'samedb',
    password: ''
});

//-------------------------------------------------ANASAYFAM-----------------
module.exports.index = function (req, res) {
    var hakkimda = '';
    var nelerileugrasiyorum = '';
    var ugras1 = '';
    var ugras2 = '';
    var ugras3 = '';
    var ugras4 = '';
    var ugras5 = '';
    var ugras6 = '';
    var footeryazi = '';
    //-----------------
    con.connect(function (err) {
        var sql = 'select * from anasayfaayarlari';
        con.query(sql, function (err, result) {
            hakkimda = result[0]['hakkimda'];
            nelerileugrasiyorum = result[0]['nelerileugrasiyorum'];
            ugras1 = result[0]['ugras1'];
            ugras2 = result[0]['ugras2'];
            ugras3 = result[0]['ugras3'];
            ugras4 = result[0]['ugras4'];
            ugras5 = result[0]['ugras5'];
            ugras6 = result[0]['ugras6'];
            footeryazi = result[0]['footeryazi'];
            res.render(path.join(__dirname, './server/views/index.ejs'), {
                samed1: hakkimda,
                samed2: nelerileugrasiyorum,
                samed3: ugras1,
                samed4: ugras2,
                samed5: ugras3,
                samed6: ugras4,
                samed7: ugras5,
                samed8: ugras6,
                samed9: footeryazi

            });
        });
    });
}
var onceki;
module.exports.blog = function (req, res) {
    con.connect(function (err) { //17
        var sql = 'select * from blogyazilari';
        con.query(sql, function (err, result) {
            console.log(result[0]['baslik']);
            res.render(path.join(__dirname, './server/views/blog.ejs'), {
                uzunluk:result.length,
                veriler:result
            });
        });
    });
   
}
var durum = '';
var girdimi = false;
module.exports.loginkontrol = function (req, res) { 
    var kadi = req.body.kullaniciadi;
    var sifre = req.body.sifre;
    console.log(kadi + ' ' + sifre);
    con.connect(function (err) {
        var sql = 'select * from kullanicilar where kadi=' + mysql.escape(kadi);
        con.query(sql, function (err, result) {
            try {
                if (result[0]['sifre'] == sifre) {
                    var sqlgetir = 'select * from anasayfaayarlari'
                    con.query(sqlgetir, function (err, sonuc) {
                        console.log(sonuc.count);
                        var sqlblog = 'select * from blogyazilari'
                        con.query(sqlblog, function (err, blogsonuc) {
                        console.log(blogsonuc.length, "<<Gelen Değer>>")
                        console.log(blogsonuc.length,blogsonuc[0]['blog_id'], "<<<<<<<<<<<<<<<<<<<<<<<<değer<<<<<<<<<<<<<<")
                       onceki=sonuc[0]['hakkimda'];
                        if (blogsonuc.length != 0) {
                            res.render(path.join(__dirname, './server/views/panel.ejs'), {
                                yaz1: sonuc[0]['hakkimda'],
                                yaz2: sonuc[0]['nelerileugrasiyorum'],
                                yaz3: sonuc[0]['ugras1'],
                                yaz4: sonuc[0]['ugras2'],
                                yaz5: sonuc[0]['ugras3'],
                                naber: blogsonuc.length,
                                naberla: blogsonuc,
                                yaz6: sonuc[0]['ugras4'],
                                yaz7: sonuc[0]['ugras5'],
                                yaz8: sonuc[0]['ugras6'],
                                yaz9: sonuc[0]['footeryazi'],
                            });
                        } else {
                            res.render(path.join(__dirname, './server/views/panel.ejs'), {
                                yaz1: sonuc[0]['hakkimda'],
                                yaz2: sonuc[0]['nelerileugrasiyorum'],
                                yaz3: sonuc[0]['ugras1'],
                                yaz4: sonuc[0]['ugras2'],
                                yaz5: sonuc[0]['ugras3'],
                                naber: sonuc.length,
                                naberla: null,
                                yaz6: sonuc[0]['ugras4'],
                                yaz7: sonuc[0]['ugras5'],
                                yaz8: sonuc[0]['ugras6'],
                                yaz9: sonuc[0]['footeryazi'],
                            });
                        }
                        });
                    });
                }
                else {
                    durum = 'Kullanıcı Bilgileri Yanlış';
                    res.render(path.join(__dirname, './server/views/login.ejs'), {
                        yanlis: durum
                    });
                }
            }
            catch (err) {
                durum = 'Kullanıcı Bilgileri Yanlış';
                res.render(path.join(__dirname, './server/views/login.ejs'), {
                    yanlis: durum
                });
            }
        }); 
    });
}
module.exports.panelgetir = function (req, res) {
    res.render(path.join(__dirname, './server/views/panel.ejs'), {

    }); 
} 
module.exports.login = function (req, res) {
    res.render(path.join(__dirname, './server/views/login.ejs'), {
        yanlis: durum
    });
}
module.exports.sil = function (req, res) {
    var blogid = req.body.idsi;
    con.connect(function (err) { //17
        var sql = 'DELETE FROM blogyazilari WHERE  blog_id=' + mysql.escape(blogid);
        con.query(sql, function (err, result) {
            var sqlgetir = 'select * from anasayfaayarlari'
            con.query(sqlgetir, function (err, sonuc) {
                console.log(sonuc.count);
                var sqlblog = 'select * from blogyazilari'
                con.query(sqlblog, function (err, blogsonuc) {
                console.log(blogsonuc.length, "<<Gelen Değer>>")
                console.log(blogsonuc.length,blogsonuc[0]['blog_id'], "<<<<<<<<<<<<<<<<<<<<<<<<değer<<<<<<<<<<<<<<")
                if (blogsonuc.length != 0) {
                    res.render(path.join(__dirname, './server/views/panel.ejs'), {
                        yaz1: sonuc[0]['hakkimda'],
                        yaz2: sonuc[0]['nelerileugrasiyorum'],
                        yaz3: sonuc[0]['ugras1'],
                        yaz4: sonuc[0]['ugras2'],
                        yaz5: sonuc[0]['ugras3'],
                        naber: blogsonuc.length,
                        naberla: blogsonuc,
                        yaz6: sonuc[0]['ugras4'],
                        yaz7: sonuc[0]['ugras5'],
                        yaz8: sonuc[0]['ugras6'],
                        yaz9: sonuc[0]['footeryazi'],
                    });
                } else {
                    res.render(path.join(__dirname, './server/views/panel.ejs'), {
                        yaz1: sonuc[0]['hakkimda'],
                        yaz2: sonuc[0]['nelerileugrasiyorum'],
                        yaz3: sonuc[0]['ugras1'],
                        yaz4: sonuc[0]['ugras2'],
                        yaz5: sonuc[0]['ugras3'],
                        naber: sonuc.length,
                        naberla: null,
                        yaz6: sonuc[0]['ugras4'],
                        yaz7: sonuc[0]['ugras5'],
                        yaz8: sonuc[0]['ugras6'],
                        yaz9: sonuc[0]['footeryazi'],
                    });
                }
                });
            });
        })
    })
}
var hak,ug,ug1,ug2,ug3,ug4,ug5,ug6,fot;
module.exports.guncelle = function (req, res) {
    var blogid = req.body.idsi;
    hak=req.body.hakkimda;
    ug=req.body.ugras;
    ug1=req.body.ugras1;
    ug2=req.body.ugras2;
    ug3=req.body.ugras3;
    ug4=req.body.ugras4;
    ug5=req.body.ugras5;
    ug6=req.body.ugras6;
    fot=req.body.footeryazi;
    con.connect(function (err) { //17
        var sql = 'update anasayfaayarlari set hakkimda='+mysql.escape(hak)+',nelerileugrasiyorum='+mysql.escape(ug)+',ugras1='+mysql.escape(ug1)+',ugras2='+mysql.escape(ug2)+',ugras3='+mysql.escape(ug3)+',ugras4='+mysql.escape(ug4)+',ugras5='+mysql.escape(ug5)+',ugras6='+mysql.escape(ug6)+',footeryazi='+mysql.escape(fot)+' where hakkimda='+mysql.escape(onceki)+' ';
        con.query(sql, function (err, result) {
            console.log(result);
            var sqlgetir = 'select * from anasayfaayarlari'
            con.query(sqlgetir, function (err, sonuc) {
                console.log(sonuc.count);
                onceki=sonuc[0]['hakkimda'];
                var sqlblog = 'select * from blogyazilari'
                con.query(sqlblog, function (err, blogsonuc) {
                console.log(blogsonuc.length, "<<Gelen Değer>>")
                console.log(blogsonuc.length,blogsonuc[0]['blog_id'], "<<<<<<<<<<<<<<<<<<<<<<<<değer<<<<<<<<<<<<<<")
                if (blogsonuc.length != 0) {
                    res.render(path.join(__dirname, './server/views/panel.ejs'), {
                        yaz1: sonuc[0]['hakkimda'],
                        yaz2: sonuc[0]['nelerileugrasiyorum'],
                        yaz3: sonuc[0]['ugras1'],
                        yaz4: sonuc[0]['ugras2'],
                        yaz5: sonuc[0]['ugras3'],
                        naber: blogsonuc.length,
                        naberla: blogsonuc,
                        yaz6: sonuc[0]['ugras4'],
                        yaz7: sonuc[0]['ugras5'],
                        yaz8: sonuc[0]['ugras6'],
                        yaz9: sonuc[0]['footeryazi'],
                    });
                } else {
                    res.render(path.join(__dirname, './server/views/panel.ejs'), {
                        yaz1: sonuc[0]['hakkimda'],
                        yaz2: sonuc[0]['nelerileugrasiyorum'],
                        yaz3: sonuc[0]['ugras1'],
                        yaz4: sonuc[0]['ugras2'],
                        yaz5: sonuc[0]['ugras3'],
                        naber: sonuc.length,
                        naberla: null,
                        yaz6: sonuc[0]['ugras4'],
                        yaz7: sonuc[0]['ugras5'],
                        yaz8: sonuc[0]['ugras6'],
                        yaz9: sonuc[0]['footeryazi'],
                    });
                }
                });
            });
        })
    })
}
module.exports.panel = function (req, res) {
    res.render(path.join(__dirname, './server/views/panel.ejs'), {
        
    }); 
}
var bas,ic,resimm;
module.exports.ekle = function (req, res) {
    var blogid = req.body.idsi;
    bas=req.body.baslik;
    ic=req.body.icerik;
    resimm='default';
    con.connect(function (err) { //17
        var sql = 'insert into blogyazilari (baslik,icerik,resim) values ('+mysql.escape(bas)+','+mysql.escape(ic)+','+mysql.escape(resimm)+')';
        con.query(sql, function (err, result) {
            var sqlgetir = 'select * from anasayfaayarlari'
            con.query(sqlgetir, function (err, sonuc) {
                console.log(sonuc.count);
                var sqlblog = 'select * from blogyazilari'
                con.query(sqlblog, function (err, blogsonuc) {
                console.log(blogsonuc.length, "<<Gelen Değer>>")
                console.log(blogsonuc.length,blogsonuc[0]['blog_id'], "<<<<<<<<<<<<<<<<<<<<<<<<değer<<<<<<<<<<<<<<")
                if (blogsonuc.length != 0) {
                    console.log('HATA BURADAN SONRA');
                    res.render(path.join(__dirname, './server/views/panel.ejs'), {
                        yaz1: sonuc[0]['hakkimda'],
                        yaz2: sonuc[0]['nelerileugrasiyorum'],
                        yaz3: sonuc[0]['ugras1'],
                        yaz4: sonuc[0]['ugras2'],
                        yaz5: sonuc[0]['ugras3'],
                        naber: blogsonuc.length,
                        naberla: blogsonuc,
                        yaz6: sonuc[0]['ugras4'],
                        yaz7: sonuc[0]['ugras5'],
                        yaz8: sonuc[0]['ugras6'],
                        yaz9: sonuc[0]['footeryazi'],
                    });
                } else {
                    res.render(path.join(__dirname, './server/views/panel.ejs'), {
                        yaz1: sonuc[0]['hakkimda'],
                        yaz2: sonuc[0]['nelerileugrasiyorum'],
                        yaz3: sonuc[0]['ugras1'],
                        yaz4: sonuc[0]['ugras2'],
                        yaz5: sonuc[0]['ugras3'],
                        naber: sonuc.length,
                        naberla: null,
                        yaz6: sonuc[0]['ugras4'],
                        yaz7: sonuc[0]['ugras5'],
                        yaz8: sonuc[0]['ugras6'],
                        yaz9: sonuc[0]['footeryazi'],
                    });
                }
                });
            });
        });
    });
}
router.get('/', module.exports.index);
router.get('/blog', module.exports.blog);
router.get('/panel', module.exports.loginkontrol); 
router.get('/login', module.exports.login)
router.post('/panel', module.exports.loginkontrol);
router.post('/sil', module.exports.sil);
router.post('/guncelle', module.exports.guncelle);
router.post('/ekle',module.exports.ekle);
module.exports = router;