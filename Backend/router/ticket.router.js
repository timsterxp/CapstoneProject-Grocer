let express = require("express");
let router = express.Router(); //router reference
let TicketController = require("../controller/ticket.controller.js");

router.post("/UserLogin/Ticket", TicketController.sendTicket);




module.exports = router;