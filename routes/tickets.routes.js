const db = require('../db/db');
const router = require('express').Router();


// show all tickets on : http://localhost:4000/app/v1/tickets
router
    .route('')
    .get((_req,res)=>{
        const tickets = db.find();
        res.status(200).json(tickets);
    })


module.exports = router;