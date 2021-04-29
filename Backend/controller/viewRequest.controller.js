let ViewModel = require("../model/sendReq.model.js");

let getAllViews = (req, res) => {
    ViewModel.find({}, (err, result) => {
        if (!err) {
            res.json(result);
        }
    })
}

let updateRequest = (req, res) => {
    let Empid = req.body.Empid;
    let pname = req.body.pname

    let status = req.body.status;
    ViewModel.updateMany({ Empid, pname }, { $set: { status } }, (err, result) => {
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

module.exports = { getAllViews, updateRequest };