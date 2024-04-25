const router = require('express').Router ();

router.get ('/pelajar',(_,res) =>{
    res.json ({
        status : true,
        message : 'Berhasil Diakses'
    });
});

router.post('/pelajar',(_,res) =>{
    res.json({
        status : true,
        message : 'ini adalah method POST pelajar'
    });
});

router.put('/pelajar',(_,res) =>{
    res.json({
        status : true,
        message : 'ini adalah method PUT pelajar'
    });
});

router.delete('/pelajar',(_,res) =>{
    res.json({
        status : true,
        message : 'ini adalah method DELETE pelajar'
    });
});

module.exports = router;