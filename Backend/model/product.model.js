let mongoose = require("mongoose");
mongoose.Promise = global.Promise;

let ProductSchema = mongoose.Schema({
    ProductName: String,
    ProductDescription: String,
    ProductPrice: Number,
    Inventory: Number,
    ProductID: Number
})
let ProductModel = mongoose.model("Products", ProductSchema, "Products");




module.exports = ProductModel;