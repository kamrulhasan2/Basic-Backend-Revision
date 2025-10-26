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

    //returns all available tickets
    find(){
        return this.tickets;
    }

    //find ticket by ticket id
    findById(ticketId){
        const ticket = this.tickets.find((ticket)=> ticket.id === ticketId);

        return ticket;
    }

    //find all tickets for a given user
    findByUser(username){
        const tickets = this.tickets.filter((ticket)=> ticket.username === username );

        return tickets;
    }




}

const  myDB = new MyDB();

module.exports = myDB;