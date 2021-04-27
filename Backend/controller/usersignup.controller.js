// This controller contains methods for user-signup , login and authentication 
let UserModel = require('../model/user.model');

// UserSignUp 
let storeUserDetails = (req, res) => {

    var UserIDtem = req.body.FirstName + req.body.LastName;
    let user = new UserModel({

        UserID: UserIDtem,
        FirstName: req.body.FirstName,
        LastName: req.body.LastName,
        Email: req.body.Email,
        Password: req.body.Password,
        DOB: req.body.DOB,
        PhoneNumber: req.body.PhoneNumber,
        Address: req.body.Address


    });

    user.save((err, result) => {
        if (!err) {
            res.send("Record stored successfully " + result)
        } else {
            res.send("Record didn't store " + err);
        }
    })

}







// to get all users 
let getAllUserDetails = (req, res) => {
    UserModel.find({}, (err, result) => {
        if (!err) {
            res.json(result);
        }
        else {
            console.log('Error : ' + err);
        }
    })

}








// for authenticating user purpose
let getUserById = (req, res) => {


    var user = req.body.userid;
    var pass = req.body.userpass;

    UserModel.find({}, (err, result) => {
        if (!err) {

            result.forEach((obj) => {

                // console.log(obj.Password) ;
                // console.log(obj.UserID) ;

                if (obj.UserID == user && obj.Password == pass) {
                    console.log("Welcome");
                    // after authentication code goes here 

                }
                else {
                    console.log("Error Signing In");
                    // display incorrect authentication message and back to login page goes here 
                }
            })
        }
    })

}





module.exports = { storeUserDetails, getAllUserDetails, getUserById }