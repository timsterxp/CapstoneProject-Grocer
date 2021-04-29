let CartModel = require("../model/cart.model")
let ProductModel = require("../model/product.model.js")


// Creates a new Cart-Item for saving to cart
let addToCart = (req, res) => {

    let newItem = new CartModel({
        ProductID: req.body.ProductID,
        ProductName: req.body.ProductName,
        Quantity: req.body.Quantity,
        ProductPrice: req.body.ProductPrice

    });
    newItem.save((err, result) => {
        if (!err) {
            res.send("Saved item");
        } else {
            res.send("ERROR");
        }
    })


}

//Get all items in cart
let getCart = (req, res) => {
    CartModel.find({}, (err, result) => {
        if (!err) {
            res.json(result);
        }
    })
}

//Display all available items
let getAllItems = (req, res) => {
    ProductModel.find({}, (err, result) => {
        if (!err) {
            res.json(result);
        }
    })
}

//Deletes item from cart
let deleteItem = (req, res) => {
    let productID = req.params.ProductID
    CartModel.deleteOne({ ProductID: productID }, (err, result) => {
        if (!err) {

            res.json(result);
        }
    })
}

//Updates quantity of item in your cart
let updateItem = (req, res) => {
    let productID = req.body.ProductID;
    let updatedQuantity = req.body.Quantity;
    CartModel.updateOne({ ProductID: productID }, { $set: { Quantity: updatedQuantity } }, (err, result) => {
        if (!err) {
            res.send("Modified");
        }
    })
}

//Gets the max quantity available for an item
let checkMax = (req, res) => {
    let productID = req.params.ProductID;
    ProductModel.find({ ProductID: productID }, (err, data) => {
        if (!err) {
            res.json(data);
        }
    })
}

let alreadyExist = (req, res) => {
    let productID = req.params.ProductID;
    CartModel.find({ ProductID: productID }, (err, data) => {
        if (!err) {
            res.json(data);
        }
    })
}



module.exports = { addToCart, getAllItems, getCart, deleteItem, updateItem, checkMax, alreadyExist };