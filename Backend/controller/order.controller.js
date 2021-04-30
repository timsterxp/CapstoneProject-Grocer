const OrderModel = require("../model/order.model")

let addOrder = (req, res) => {
    let newOrder = new OrderModel({
        OrderNumber: req.body.OrderNumber,
        UserID: req.body.UserID,
        Products: req.body.Products,
        Amount: req.body.Amount,
        Reason: "Order placed",
        Date: req.body.Date,
        Status: req.body.Status

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