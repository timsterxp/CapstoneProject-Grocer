let mongoose = require("mongoose");
mongoose.Promise = global.Promise;

let AdminSchema = mongoose.Schema({
    _id: Number,
    password: String
})
let AdminModel = mongoose.model("Admin", AdminSchema, "Admin");

module.exports = AdminModel;