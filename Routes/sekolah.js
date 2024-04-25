const router = require('express').Router ();

router.get ('/sekolah',(_,res) =>{
    res.json ({
        status : true,
        message : 'Berhasil Diakses'
    });
});

router.post('/sekolah',(_,res) =>{
    res.json({
        status : true,
        message : 'ini adalah method POST sekolah'
    });
});

router.put('/sekolah',(_,res) =>{
    res.json({
        status : true,
        message : 'ini adalah method PUT sekolah'
    });
});

router.delete('/sekolah',(_,res) =>{
    res.json({
        status : true,
        message : 'ini adalah method DELETE sekolah'
    });
});

module.exports = router;