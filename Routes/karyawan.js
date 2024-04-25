const router = require('express').Router ();

router.get ('/karyawan',(_,res) =>{
    res.json ({
        status : true,
        message : 'Berhasil Diakses'
    });
});

router.post('/karyawan',(_,res) =>{
    res.json({
        status : true,
        message : 'ini adalah method POST karyawan'
    });
});

router.put('/karyawan',(_,res) =>{
    res.json({
        status : true,
        message : 'ini adalah method PUT karyawan'
    });
});

router.delete('/karyawan',(_,res) =>{
    res.json({
        status : true,
        message : 'ini adalah method DELETE karyawan'
    });
});

module.exports = router;