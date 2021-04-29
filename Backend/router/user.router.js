let express = require("express");
let router = express.Router(); //router reference
let UserController = require("../controller/user.controller");

router.put("/updateInfo", UserController.updateInfo);


module.exports = router;