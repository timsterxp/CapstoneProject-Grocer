let express = require("express");
let router = express.Router(); //router reference
let FundsController = require("../controller/funds.controller.js");

router.put("/updateFunds/:userID", FundsController.updateFunds);
router.get("/getFunds/:UserID", FundsController.getFunds);


module.exports = router;