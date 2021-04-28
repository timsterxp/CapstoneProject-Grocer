let mongoose = require("mongoose");
mongoose.Promise = global.Promise;

let CartSchema = mongoose.Schema({
    UserEmail: String,
    CartItems: [{
        Name: String,
        Price: String,
        Quantity: String
    }]

})
let CartModel = mongoose.model("Carted", CartSchema, "Carted");




module.exports = CartModel;