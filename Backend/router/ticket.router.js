let express = require("express");
let router = express.Router(); //router reference
let TicketController = require("../controller/ticket.controller.js");

//router.post("/Ticket", TicketController.sendTicket);
router.post("/ticket", TicketController.sendTicket);




module.exports = router;