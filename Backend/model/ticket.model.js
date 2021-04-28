let mongoose = require('mongoose');

// creating reference 
mongoose.Promise = global.Promise;


// create schema 
let TicketSchema = mongoose.Schema({

    _id: String,
    Description: String

})


let UserModel = mongoose.model("UserTicket", TicketSchema, "UserTicket");


module.exports = UserModel;