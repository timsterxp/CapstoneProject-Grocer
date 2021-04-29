let EmployeeModel = require("../model/emp.model.js");
let SendRequestModel = require("../model/sendReq.model.js");
let OrderModel = require("../model/order.model.js");
let UserModel = require("../model/user.model.js");
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
    let empId = Math.floor(Math.random() * 100000000);

    let newEmployee = new EmployeeModel({
        _id: empId,
        password: 'DefaultPass',
        fname: req.body.Fname,
        lname: req.body.Lname,
        email: req.body.email
    });
    newEmployee.save((err, result) => {
        if (!err) {
            res.send("New Employee ID: " + empId + " has been added");
        } else {
            res.send("Error");
        }
    })

}

let deleteEmployee = (req, res) => {
    let empId = req.params.id
    EmployeeModel.deleteOne({ _id: empId }, (err, result) => {
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



let getOrderByNumber =(req,res)=>{
    let num = req.params.num;
    OrderModel.find({OrderNumber:num},(err,result)=>{
        if(!err){
            res.json(result);
        }else{
            res.send(err);
        }
    })
}

let RefundwithUserID = (req,res)=>{
    let ID = req.body.userid;
    let refund = req.body.fund;
    UserModel.updateOne({UserID:ID},{$inc:{funds:refund}},(err,result)=>{
        if(!err){
            res.send("Refund Processed");
        }else{
            res.send("Error");
        }
    })
}


module.exports={getAllEmployees,updateEmployeePassword,sendRequest,updateOrderStatus,getAllOrders, getAllRequest, getOrderByNumber,RefundwithUserID, addEmployee, deleteEmployee};
