let express = require("express");
let router = express.Router(); //router reference
let FundsController = require("../controller/funds.controller.js");

router.post("/addFunds", FundsController.addFunds);

router.get("/getFunds/:userID", FundsController.getFunds);


module.exports = router;