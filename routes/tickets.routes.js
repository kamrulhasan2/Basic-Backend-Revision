const db = require('../db/db');
const router = require('express').Router();


// get , update , delete a ticket on : http://localhost:4000/app/v1/tickets?ticketId=''
router
    .route('/t/:ticketId')
    .get((req,res)=>{
        const ticketId = req.params.ticketId;
        const ticket = db.findById(ticketId);

        res.status(200).json(ticket);
    })
    .patch((req,res)=>{
        const ticketId = req.params.ticketId;
        const updatedTicket = db.updateById(ticketId);

        res.status(200).json({message: 'Updated Successfully', updatedTicket});
    })
    .delete((req,res)=>{
        const ticketId = req.params.ticketId;
        db.deleteById(ticketId);

        res.status(203).json({message: 'Deleted Successfully'});
    });

// create a ticket on : http://localhost:4000/app/v1/tickets/sell?username=''&price=''
router
    .post('/sell',(req,res)=>{
        const {username, price} = req.body;
        const ticket = db.create(username,price);

        res.status(201).json({message: 'Ticket created successfully', ticket});
    });

// create bulk tickets on : http://localhost:4000/app/v1/tickets/post?username=''&price=''&quantity=''
router
    .post('/bulk',(req,res)=>{
        const {username,price,quantity} = req.body;
        const tickets = db.bulkCreate(username,price,quantity);

        res.status(201).json({message: 'Bulk ticket creates successfully', tickets});
    });


// draw latteries on : http://localhost:4000/app/v1/tickets/draw
router.get('/draw',(req,res)=>{
    const winnerCount = req.query.wc ?? 3;
    const winners = db.draw(winnerCount);

    res.status(200).json({message: 'Winners are', winners});
});

    // show all tickets on : http://localhost:4000/app/v1/tickets/
router
    .route('')
    .get((_req,res)=>{
        const tickets = db.find();
        res.status(200).json(tickets);
    });


module.exports = router;