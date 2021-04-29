let express = require("express");
let router = express.Router(); //router reference
let TicketController = require("../controller/ticket.controller.js");

//router.post("/Ticket", TicketController.sendTicket);
router.post("/ticket", TicketController.sendTicket);
router.get("/allTickets", TicketController.getAllTickets);
router.delete("/delByEmail/:email",TicketController.deleteByEmail);



module.exports = router;