const router = require('express').Router ();

router.get ('/olahraga',(_,res) =>{
    res.json ({
        status : true,
        message : 'Berhasil Diakses'
    });
});

router.post('/olahraga',(_,res) =>{
    res.json({
        status : true,
        message : 'ini adalah method POST olahraga'
    });
});

router.put('/olahraga',(_,res) =>{
    res.json({
        status : true,
        message : 'ini adalah method PUT olahraga'
    });
});

router.delete('/olahraga',(_,res) =>{
    res.json({
        status : true,
        message : 'ini adalah method DELETE olahraga'
    });
});

module.exports = router;