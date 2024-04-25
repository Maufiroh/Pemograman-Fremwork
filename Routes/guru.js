const router = require('express').Router ();

router.get ('/guru',(_,res) =>{
    res.json ({
        status : true,
        message : 'Berhasil Diakses'
    });
});

router.post('/guru',(_,res) =>{
    res.json({
        status : true,
        message : 'ini adalah method POST guru'
    });
});

router.put('/guru',(_,res) =>{
    res.json({
        status : true,
        message : 'ini adalah method PUT guru'
    });
});

router.delete('/guru',(_,res) =>{
    res.json({
        status : true,
        message : 'ini adalah method DELETE guru'
    });
});

module.exports = router;