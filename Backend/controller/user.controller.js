// This controller contains methods for user-signup , login and authentication 
let UserModel = require('../model/user.model') ;

// UserSignUp 
let updateInfo = (req, res) => {
    let userID = req.body.userID
    let userPass = req.body.userpass;
    let userAdd = req.body.useradd;
    let userNum = req.body.usernum;
    let userEmail = req.body.useremail;

    UserModel.updateOne(
        { UserID: userID },
        {
            $set: {
                Password: userPass,
                    Address: userAdd,
                        PhoneNumber: userNum,
                    Email: userEmail
                    
            },
        }, (err, result) => {
            if (!err) {
                res.send("Records updated:" + result.nModified);
            } else {
                res.send("Error" + err);
            }
        }
    )
}


module.exports = { updateInfo }
