const UserModel = require("../model/user.model.js");

let updateFunds = (req, res) => {
    console.log("params: " + req.params);
    let userID = req.params.userID;
    let addfunds = req.body.funds;
    console.log("UserID: " + userID + " Add: " + addfunds);
    UserModel.updateOne({ Email: userID }, {
        $inc: {
            funds: addfunds
        },
    }, (err, result) => {
        if (!err) {

            res.send("Funds updated:" + result.nModified);
        } else {
            res.send("Error" + err);
        }
    })
}

let getFunds = (req, res) => {
    let userEmail = req.params.userEmail;
    UserModel.find({ Email: userEmail }, (err, result) => {
        if (!err) {
            res.json(result);
        } else {
            console.log("error!")
        }
    })
}

module.exports = { getFunds, updateFunds };


/*
 * 
 *const FundsModel = require("../model/funds.model.js")
let addFunds = (req, res) => {
    let newFunds = new FundsModel({
        _id: req.body.userid,
        Funds: req.body.funds
    });
    newFunds.save((err, result) => {
        if (!err) {
            res.send("Funds successfully added");
        } else {
            res.send("Error" + err);
        }
    })
}
let getFunds = (req, res) => {
    let userID = req.params.userID;
    FundsModel.find({ _id: userID }, (err, result) => {
        if (!err) {
            res.json(result);
        } else {
            console.log("error!")
        }
    })
}
module.exports = { addFunds, getFunds };
 */