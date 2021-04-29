let EmployeeModel = require("../model/employee.model.js");


let addEmployee = (req, res) => {
    let newEmployee = new EmployeeModel({
        Email: req.body.email,
        Password: 'DefaultPass',
        Fname: req.body.Fname,
        Lname: req.body.Lname
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
    EmployeeModel.deleteOne({ Email: empEmail }, (err, result) => {
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

module.exports = { addEmployee, deleteEmployee };