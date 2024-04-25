const router = require('express').Router ();

router.get ('/siswa',(_,res) =>{
    res.json ({
        status : true,
        message : 'Berhasil Diakses'
    });
});

router.post('/siswa',(_,res) =>{
    res.json({
        status : true,
        message : 'ini adalah method POST siswa'
    });
});

router.put('/siswa',(_,res) =>{
    res.json({
        status : true,
        message : 'ini adalah method PUT siswa'
    });
});

router.delete('/siswa',(_,res) =>{
    res.json({
        status : true,
        message : 'ini adalah method DELETE siswa'
    });
});

module.exports = router;