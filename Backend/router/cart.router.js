let express = require("express");
let router = express.Router(); //router reference
let CartController = require("../controller/cart.controller.js");

router.post("/addToCart", CartController.addToCart);




module.exports = router;