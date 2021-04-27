let mongoose = require("mongoose");
mongoose.Promise = global.Promise;

let SendRequestSchema = mongoose.Schema({
    _id: Number,
    pname: String,
    quantity: Number
})
let SendRequestModel = mongoose.model("Request", SendRequestSchema, "Request");


module.exports = SendRequestModel;