let express = require("express");
let router = express.Router(); //router reference
let AdminController = require("../controller/admin.controller.js");
router.get("/Adminlogin", AdminController.getAllAdmins);

module.exports = router;