let mongoose = require("mongoose");
mongoose.Promise = global.Promise;

let OrderSchema = mongoose.Schema({
    OrderNumber:Number,
    UserName:String,
    Products:Object,
    Amount:Number,
    Status:String,
    Reason:String
})
let OrderModel = mongoose.model("Order",OrderSchema,"Order");




module.exports = OrderModel;