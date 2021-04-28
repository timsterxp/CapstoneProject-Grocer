let TicketModel = require("../model/ticket.model.js");

let sendTicket = (req, res) => {
    let UserTicket = new TicketModel({
        
        UserName : req.body.UserName ,   
        RequestTicket : req.body.RequestTicket,
        RequestStatus :  "Pending"
    })
  
    UserTicket.save((err, result) => {
        if (!err) {
            res.send("Sent Ticket");
        } else {
            res.send("Error");
        }
    })
}



module.exports = {sendTicket}