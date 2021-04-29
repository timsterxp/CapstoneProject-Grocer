 let express = require('express') ;

// reference to router : helps to navigate based on path provided 
// Pass control to controller based on route 
let router = express.Router();     

let usersignUpController = require('../controller/usersignup.controller') ;





// mapping sub path with http methods 

router.post("/signup" , usersignUpController.storeUserDetails ) ;
router.get("/alluser" , usersignUpController.getAllUserDetails ) ;
router.post("/auth/:userid&:userpass" , usersignUpController.getUserById );
router.put("/loginFail",usersignUpController.loginAttemptFail);
router.get("/userByEmail/:email",usersignUpController.getUserByEmail);
router.put("/lockAccount",usersignUpController.lockAccount);

module.exports = router ;








