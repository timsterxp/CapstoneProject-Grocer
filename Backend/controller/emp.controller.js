let EmployeeModel = require("../model/emp.model.js");
let SendRequestModel = require("../model/sendReq.model.js");
let OrderModel = require("../model/order.model.js");
//Get all employees

let getAllEmployees = (req, res) => {
    EmployeeModel.find({}, (err, result) => {
        if (!err) {
            res.json(result);
        }
    })
}


let updateEmployeePassword = (req, res) => {
    let id = req.body.id;
    let Newpass = req.body.Newpass;
    EmployeeModel.updateOne({ _id: id }, { $set: { password: Newpass } }, (err, result) => {
        if (!err) {
            if (result.nModified > 0) {
                res.send("Password Updated Successfully!");
            }
        } else {
            res.send("Error" + err);
        }
    })
}


let sendRequest = (req, res) => {
    let request = new SendRequestModel({
        Empid: req.body.Empid,
        pname: req.body.pname,
        request: req.body.request,
        status: req.body.status
    });
    request.save((err, result) => {
        if (!err) {
            res.send("Request sent");
        } else {
            res.send("Error!");
        }
    })
}

let updateOrderStatus = (req, res) => {
    let orderNumber = req.body.ordernumber;
    let status = req.body.status;
    if (!req.body.reason) {
        OrderModel.updateOne({ OrderNumber: orderNumber }, { $set: { Status: status } }, (err, result) => {
            if (!err) {
                if (result.nModified > 0) {
                    res.send("Status Updated!");
                }
            } else {
                res.send("Error" + err);
            }
        });
    } else {
        let orderNumber = req.body.ordernumber;
        let status = req.body.status;
        let reason = req.body.reason;
        OrderModel.updateOne({ OrderNumber: orderNumber }, { $set: { Status: status, Reason: reason } }, (err, result) => {
            if (!err) {
                if (result.nModified > 0) {
                    res.send("Status Updated!");
                }
            } else {
                res.send("Error" + err);
            }
        });
    }
}

let getAllOrders = (req, res) => {
    OrderModel.find({}, (err, result) => {
        if (!err) {
            res.json(result);
        }
    })
}



let getAllRequest = (req, res) => {
    SendRequestModel.find({}, (err, result) => {
        if (!err) {
            res.json(result);
        }
    })
}

let addEmployee = (req, res) => {
    EmployeeModel.find({}, { "password": 0, "fname": 0, "lname": 0, "email": 0 }).sort({ _id: -1 }).limit(1), (err, result) => {
        if (!err) {
            console.log("Previous Employee was  " + result);
        }
    }
    let newEmployee = new EmployeeModel({
        password: 'DefaultPass',
        fname: req.body.Fname,
        lname: req.body.Lname,
        email: req.body.email
    });
    newEmployee.save((err, result) => {
        if (!err) {
            res.send("Added New Employee");
        } else {
            res.send("Error");
        }
    })
}

let deleteEmployee = (req, res) => {
    let empEmail = req.params.email
    EmployeeModel.deleteOne({ email: empEmail }, (err, result) => {
        if (!err) {
            if (result.deletedCount > 0) {
                res.send("Successful removal of employee")
            } else {
                res.send("Cannot find employee");
            }
        } else {
            res.send("Error: " + err);
        }
    })
}




module.exports = { getAllEmployees, updateEmployeePassword, sendRequest, updateOrderStatus, getAllOrders, getAllRequest, addEmployee, deleteEmployee };