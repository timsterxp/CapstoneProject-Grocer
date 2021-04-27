let mongoose = require("mongoose");
mongoose.Promise = global.Promise;

let SendRequestSchema = mongoose.Schema({
    Empid:Number,
    pname:String,
    request:String,
    status:String
})
let SendRequestModel = mongoose.model("EmployeeRequest",SendRequestSchema,"EmployeeRequest");


module.exports = SendRequestModel;