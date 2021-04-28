let express = require("express");
let router = express.Router(); //router reference
let EmployeeController = require("../controller/employee.controller.js");

//router.post("/Ticket", TicketController.sendTicket);
router.post("/addEmployee", EmployeeController.addEmployee);
router.delete("/deleteEmployee/:email", EmployeeController.deleteEmployee);




module.exports = router;