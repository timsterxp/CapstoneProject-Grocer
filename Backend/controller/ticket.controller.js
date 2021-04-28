let TicketModel = require("../model/ticket.model.js");

let sendTicket = (req, res) => {

    let newTicket = new TicketModel({
        UserName: req.body.UserName,
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



module.exports = { sendTicket };
