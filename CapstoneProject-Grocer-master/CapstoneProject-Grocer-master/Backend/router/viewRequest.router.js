let express = require("express");
let router = express.Router();   //router reference
let ViewController = require("../controller/viewRequest.controller.js");
router.get("/view",ViewController.getAllViews);
router.put("/updateRequest", ViewController.updateRequest);

module.exports = router;