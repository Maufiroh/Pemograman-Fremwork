const router = require('express').Router ();

router.get ('/Pelajaran',(_,res) =>{
    res.json ({
        status : true,
        message : 'Berhasil Diakses'
    });
});

router.post('/pelajaran',(_,res) =>{
    res.json({
        status : true,
        message : 'ini adalah method POST pelajaran'
    });
});

router.put('/pelajaran',(_,res) =>{
    res.json({
        status : true,
        message : 'ini adalah method PUT pelajaran'
    });
});

router.delete('/pelajaran',(_,res) =>{
    res.json({
        status : true,
        message : 'ini adalah method DELETE pelajaran'
    });
});

module.exports = router;