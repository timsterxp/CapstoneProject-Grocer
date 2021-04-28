let TicketModel = require("../model/ticket.model.js");

let sendTicket = (req, res) => {
    let newTicket = new TicketModel({
        _id: req.body.userid,
        Description: req.body.description
    })
    newTicket.save((err, result) => {
        if (!err) {
            res.send("Sent Ticket");
        } else {
            res.send("Error");
        }
    })
}

module.exports={sendTicket};