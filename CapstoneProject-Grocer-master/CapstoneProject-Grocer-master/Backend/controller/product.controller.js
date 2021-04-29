let ProductModel = require("../model/product.model.js");

let getAllProducts = (req, res) => {
    ProductModel.find({}, (err, result) => {
        if (!err) {
            res.json(result);
        }
    })
}

let addProduct = (req, res) => {
    let product = new ProductModel({
        ProductName: req.body.ProductName,
        ProductDescription: req.body.ProductDescription,
        ProductPrice: req.body.ProductPrice,
        Inventory: req.body.Inventory,
        ProductID: req.body.ProductID
    });

    product.save((err, result) => {
        if (!err) {
            res.send("Record Stored successfully")
        } else {
            res.send("Record is not stored")
        }
    })
}

let deleteProductById = (req, res) => {
    console.log(req)
    let pid = req.params.pid;

    ProductModel.deleteOne({ ProductID: pid }, (err, result) => {
        if (!err) {
            if (result.deletedCount > 0) {
                res.send("Record deleted successfully" + result);
            } else {
                res.send("Record does not exist")
            }
        } else {
            res.send("Error generated " + err);
        }
    })
}

let updateProduct = (req, res) => {
    let pid = req.body.ProductID;
    let updatedPrice = req.body.ProductPrice;
    let updatedInventory = req.body.Inventory;
    ProductModel.updateMany({ ProductID: pid }, { $set: { ProductPrice: updatedPrice, Inventory: updatedInventory } }, (err, result) => {
        if (!err) {
            if (result.nModified > 0) {
                res.send("Record updated successfully")
            } else {
                res.send("Record is not available")
            }
        } else {
            res.send("Error generated " + err);
        }
    })
}


module.exports = { getAllProducts, addProduct, deleteProductById, updateProduct };