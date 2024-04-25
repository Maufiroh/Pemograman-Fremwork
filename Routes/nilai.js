const router = require('express').Router ();

router.get ('/nilai',(_,res) =>{
    res.json ({
        status : true,
        message : 'Berhasil Diakses'
    });
});

router.post('/nilai',(_,res) =>{
    res.json({
        status : true,
        message : 'ini adalah method POST nilai'
    });
});

router.put('/nilai',(_,res) =>{
    res.json({
        status : true,
        message : 'ini adalah method PUT nilai'
    });
});

router.delete('/nilai',(_,res) =>{
    res.json({
        status : true,
        message : 'ini adalah method DELETE nilai'
    });
});

module.exports = router;