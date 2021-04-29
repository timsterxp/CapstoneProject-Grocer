let express = require("express");
let router = express.Router(); //router reference
let CartController = require("../controller/cart.controller.js");

router.post("/addToCart", CartController.addToCart);
router.get("/getCart", CartController.getCart);



module.exports = router;