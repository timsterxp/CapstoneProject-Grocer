let mongoose = require("mongoose");
mongoose.Promise = global.Promise;

let EmployeeSchema = mongoose.Schema({
    _id:Number,
    password:String,
    fname: String,
    lname: String,
    email: String

})
let EmployeeModel = mongoose.model("Employee",EmployeeSchema,"Employee");




module.exports = EmployeeModel;