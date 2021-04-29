let mongoose = require("mongoose");
mongoose.Promise = global.Promise;

let OrderSchema = mongoose.Schema({
    OrderNumber:Number,
    UserID:String,
    Products:Object,
    Amount:Number,
    Status:String,
    Reason:{
        type:String,
        default:"ok"
    }
})
let OrderModel = mongoose.model("Order",OrderSchema,"Order");




module.exports = OrderModel;