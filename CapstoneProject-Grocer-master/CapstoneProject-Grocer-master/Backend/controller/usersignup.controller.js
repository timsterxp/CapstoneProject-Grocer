// This controller contains methods for user-signup , login and authentication 
let UserModel = require('../model/user.model') ;

// UserSignUp 
let storeUserDetails = (req,res)=> {
   
    var UserIDtem = req.body.FirstName + req.body.LastName ;
    let User = new UserModel({
  
        UserID : UserIDtem ,
        FirstName : req.body.FirstName ,
        LastName : req.body.LastName ,
        Email : req.body.Email ,
        Password : req.body.Password ,
        DOB : req.body.DOB ,
        PhoneNumber : req.body.PhoneNumber ,
        Address : req.body.Address
  
  
    });

    User.save((err,result)=> {
        if(!err){
            res.send("Record stored successfully "+result)
        }else {
            res.send("Record didn't store "+err);
        }
    })

}







// to get all users 
let getAllUserDetails = (req,res) => {
    UserModel.find({} , (err,result) => {
        if(!err) {
             res.json(result) ;
        }
        else{
            console.log('Error : ' +err) ;
        }
    })

}








// for authenticating user purpose
let getUserById = (req,res) => {

  
    var user = req.body.userid; 
    var pass = req.body.userpass ;   
  
    UserModel.find({} , (err,result)=> {
      if(!err) {
     
         result.forEach( (obj) => {

            // console.log(obj.Password) ;
            // console.log(obj.UserID) ;
          
            if(obj.UserID == user  && obj.Password == pass ){
                console.log("Welcome") ;
              // after authentication code goes here 

            }
            else{
                console.log("Error Signing In") ;
                // display incorrect authentication message and back to login page goes here 
            }
         })
        }
})

}

let loginAttemptFail = (req,res)=>{
    let email = req.body.inputEmail;
    UserModel.updateOne({Email:email},{$inc:{LoginAttempts:1}},(err,result)=>{
        if(!err){
            if(result.nModified>0){
                res.send("Failed Login!")
            }
        }else{
            res.send(err);
        }
    })
}

let getUserByEmail=(req,res)=>{
    let email = req.params.email;
    UserModel.find({Email:email},(err,data)=>{
        if(!err){
            res.json(data);
        }else{
            res.send(err);
        }
    })
}

let lockAccount = (req,res)=>{
    let email = req.body.inputEmail;
    UserModel.updateOne({Email:email},{$set:{Locked:true}},(err,result)=>{
        if(!err){
            if(result.nModified>0){
                res.send("Your account has been locked!");
            }
        }else{
            res.send(err);
        }
    });
}

let unlockAccount = (req,res)=>{
    let email = req.body.email;
    UserModel.updateOne({Email:email},{$set:{Locked:false,LoginAttempts:0}},(err,result)=>{
        if(!err){
            if(result.nModified>0){
                res.send("Acount Unlocked");
            }else{
                res.send("Error!");
            }
        }
    })
}





module.exports  = {  storeUserDetails  , getAllUserDetails , getUserById, loginAttemptFail, getUserByEmail,lockAccount, unlockAccount};
