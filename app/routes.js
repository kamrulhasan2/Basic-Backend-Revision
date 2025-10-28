const router = require('express').Router();

router.use('/app/v1/tickets' , require('../routes/tickets.routes'));

router.get('/health',(_req,res)=>{
    res.json({message: 'Success'});
});



module.exports = router;