const Ticket = require('../models/Ticket.model');

class MyDB {
    constructor(){
        this.tickets = [];
    }

    // Create and save a new ticket
    create(username,price){
        const ticket = new Ticket(username,price);
        this.tickets.push(ticket);

        return ticket;
    }

    //Create multiple tickets for a single user
    bulkCreate(username,price,quantity){
        const result = [];
        for(let i=0; i<quantity; i++){
            const ticket = this.create(username,price);
            result.push(ticket);
        }
        return result;
    }
}

const  myDB = new MyDB();

module.exports = myDB;