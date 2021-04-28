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

module.exports = { addEmployee };