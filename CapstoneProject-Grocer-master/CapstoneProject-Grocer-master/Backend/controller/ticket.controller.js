let TicketModel = require("../model/ticket.model.js");


//Send a new ticket with a users email + description
let sendTicket = (req, res) => {

    let newTicket = new TicketModel({
        UserEmail: req.body.UserEmail,
        Description: req.body.Description
    });
    newTicket.save((err, result) => {
        if (!err) {
            res.send("Sent Ticket");
        } else {
            res.send("Error");
        }
    })
}


let getAllTickets = (req, res) => {
    TicketModel.find({}, (err, result) => {
        if (!err) {
            res.json(result);
        }
    })
}


let deleteByEmail = (req, res) => {
    let email = req.params.email;
    TicketModel.deleteOne({ UserEmail: email }, (err, result) => {
        if (!err) {
            if (result.deletedCount > 0) {
                res.send("Ticket Settled");
            }
        } else {
            res.send("Error");
        }
    })
}



module.exports = { sendTicket, getAllTickets, deleteByEmail };