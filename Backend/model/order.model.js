let mongoose = require("mongoose");
mongoose.Promise = global.Promise;

let OrderSchema = mongoose.Schema({
    OrderNumber: Number,
    UserID: String,
    Products: Object,
    Amount: Number,
    Status:{
        type:String,
        default:"Order Placed"
    },
    Reason:{
        type:String,
        default:"NA"
    },
    Date: Date
})
let OrderModel = mongoose.model("Order", OrderSchema, "Order");




module.exports = OrderModel;