let express = require("express");
let router = express.Router();   //router reference
let ProductController = require("../controller/product.controller.js");
//router.get("/viewProducts",ProductController.getAllProducts);
router.post("/addProduct",ProductController.addProduct)
router.delete("/deleteProduct/:pid",ProductController.deleteProductById)
router.put("/updateProduct",ProductController.updateProduct)

module.exports = router;