const OrderModel = require("../model/order.model")

let addOrder = (req, res) => {
    let newOrder = new OrderModel({
        OrderNumber: req.body.Number,
        UserName: "User",
        Products: req.body.Products,
        Amount: req.body.Amount,
        Status: "Placed",
        Reason: "Order placed",
        Date: req.body.Date
        
    });
    newOrder.save((err, result) => {
        if (!err) {
            res.send("Added new Order");
        } else {
            res.send("Error");
        }
    })
}

let getOrders = (req, res) => {
    OrderModel.find({}, (err, result) => {
        if (!err) {
            res.json(result);
        } else {
            console.log("error!")
        }
    })
}

module.exports = { addOrder, getOrders };