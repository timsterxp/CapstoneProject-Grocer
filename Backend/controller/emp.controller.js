let EmployeeModel = require("../model/emp.model.js");


//Get all employees
let getAllEmployees =(req,res)=>{
    EmployeeModel.find({},(err,result)=>{
        if(!err){
            res.json(result);
        }
    })
}

let updateEmployeePassword = (req,res)=>{
    let id = req.body.id;
    let Newpass = req.body.Newpass;
    EmployeeModel.updateOne({_id:id},{$set:{password:Newpass}},(err,result)=>{
        if(!err){
            if(result.nModified>0){
                res.send("Password Updated Successfully!");
            }
        }else{
            res.send("Error"+err);
        }
    })
}


module.exports={getAllEmployees,updateEmployeePassword};