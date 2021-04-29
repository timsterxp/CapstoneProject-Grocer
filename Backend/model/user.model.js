let mongoose = require('mongoose');

// creating reference 
mongoose.Promise = global.Promise;


// create schema 
let UserSchema = mongoose.Schema({


    UserID: String,
    FirstName: String,
    LastName: String,
    Email: String,
    Password: String,
    DOB: Date,
    PhoneNumber: String,
    Address: String,


})


let UserModel = mongoose.model("User", UserSchema, "User");


module.exports = UserModel;