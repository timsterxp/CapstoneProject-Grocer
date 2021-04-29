  let express = require("express");
  let router = express.Router(); //router reference
  let OrderController = require("../controller/order.controller");

  router.post("/addOrder", OrderController.addOrder);

  router.get("/getOrders", OrderController.getOrders);
  module.exports = router;