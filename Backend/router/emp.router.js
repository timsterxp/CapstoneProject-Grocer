let express = require("express");
let router = express.Router();   //router reference
let EmpController = require("../controller/emp.controller.js");
router.get("/loginCheck",EmpController.getAllEmployees);
router.put("/updateEmployeePassword",EmpController.updateEmployeePassword);
router.post("/sendRequest", EmpController.sendRequest);

module.exports = router;