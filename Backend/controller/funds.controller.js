const UserModel = require("../model/user.model.js");

let updateFunds = (req, res) => {
    console.log("params: " + req.params);
    let userID = req.params.userID;
    let addfunds = req.body.funds;
    console.log("UserID: " + userID + " Add: " + addfunds);
    UserModel.updateOne({ UserID: userID }, {
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
    let userID = req.params.UserID;
    UserModel.find({ UserID: userID }, (err, result) => {
        if (!err) {
            res.json(result);
        } else {
            console.log("error!")
        }
    })
}

module.exports = { getFunds, updateFunds };