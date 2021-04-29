let express = require("express");
let router = express.Router(); //router reference
let CartController = require("../controller/cart.controller.js");

router.post("/addToCart", CartController.addToCart);
router.get("/showItems", CartController.getAllItems);
router.get("/getCart", CartController.getCart)
router.delete("/deleteItem/:ProductID", CartController.deleteItem)
router.put("/update", CartController.updateItem)


module.exports = router;