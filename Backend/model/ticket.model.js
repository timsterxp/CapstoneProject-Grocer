let mongoose = require('mongoose');

// creating reference 
mongoose.Promise = global.Promise;


// create schema 
let TicketSchema = mongoose.Schema({

    UserName: String,
    Description: String


})


let TicketModel = mongoose.model("UserTicket", TicketSchema, "UserTicket");

module.exports = TicketModel;