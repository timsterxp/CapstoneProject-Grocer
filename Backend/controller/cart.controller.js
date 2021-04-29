let CartModel = require("../model/cart.model")
let ProductModel = require("../model/product.model.js")
let UserModel = require("../model/user.model")



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

let getCart = (req, res) => {
    CartModel.find({}, (err, result) => {
        if (!err) {
            res.json(result);
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

let deleteItem = (req, res) => {
    let productID = req.params.ProductID
    CartModel.deleteOne({ ProductID: productID }, (err, result) => {
        if (!err) {

            res.json(result);
        }
    })
}

let updateItem = (req, res) => {
    let productID = req.body.ProductID;
    let updatedQuantity = req.body.Quantity;
    CartModel.updateOne({ ProductID: productID }, { $set: { Quantity: updatedQuantity } }, (err, result) => {
        if (!err) {
            res.send("Modified");
        }
    })
}

let checkMax = (req, res) => {
    let productID = req.params.ProductID;
    ProductModel.find({ ProductID: productID }, (err, data) => {
        if (!err) {
            res.json(data);
        }
    })
}


module.exports = { addToCart, getAllItems, getCart, deleteItem, updateItem, checkMax };