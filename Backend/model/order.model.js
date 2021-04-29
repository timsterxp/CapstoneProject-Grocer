let mongoose = require("mongoose");
mongoose.Promise = global.Promise;

let OrderSchema = mongoose.Schema({
    OrderNumber: Number,
    UserName: String,
    Products: Object, //object
    Amount: Number,
    Status: String,
    Reason: String,
    Date: Date
})
let OrderModel = mongoose.model("Order", OrderSchema, "Order");




module.exports = OrderModel;