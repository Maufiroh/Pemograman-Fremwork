const router = require('express').Router ();

router.get ('/kepala sekolah',(_,res) =>{
    res.json ({
        status : true,
        message : 'Berhasil Diakses'
    });
});

router.post('/kepala sekolah',(_,res) =>{
    res.json({
        status : true,
        message : 'ini adalah method POST kepala sekolah'
    });
});

router.put('/kepala sekolah',(_,res) =>{
    res.json({
        status : true,
        message : 'ini adalah method PUT kepala sekolah'
    });
});

router.delete('/kepala sekolah',(_,res) =>{
    res.json({
        status : true,
        message : 'ini adalah method DELETE kepala sekolah'
    });
});

module.exports = router;