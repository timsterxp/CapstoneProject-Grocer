const CartModel = require("../model/cart.model")
let ProductModel = require("../model/product.model.js")
let addToCart = (req, res) => {
    let newItem = new CartModel({
        UserEmail: "N/ATesting@email.com",
        CartItems: [{
            Name: req.body.Name,
            Price: req.body.Price,
            Quantity: req.body.Quantity
        }]
    });
    newItem.save((err, result) => {
        if (!err) {
            res.send("Added item to cart");
        } else {
            res.send("Error");
        }
    })
}

let getAllItems = (req, res) => {
    ProductModel.find({}, (err, result) => {
        if (!err) {
            res.json(result);
        }
    })
}

module.exports = { addToCart, getAllItems };