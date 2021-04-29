let mongoose = require("mongoose");
mongoose.Promise = global.Promise;

let EmployeeSchema = mongoose.Schema({
    Email: String,
    Password: String,
    Fname: String,
    Lname: String

})
let EmployeeModel = mongoose.model("EmployeeDBTest", EmployeeSchema, "EmployeeDBTest");

module.exports = EmployeeModel;