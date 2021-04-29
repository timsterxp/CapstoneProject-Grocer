let mongoose = require("mongoose");
mongoose.Promise = global.Promise;

let CartSchema = mongoose.Schema({
    ProductID: Number,
    ProductName: String,
    Quantity: Number,
    ProductPrice: Number



})
let CartModel = mongoose.model("CartedTest", CartSchema, "CartedTest");




module.exports = CartModel;