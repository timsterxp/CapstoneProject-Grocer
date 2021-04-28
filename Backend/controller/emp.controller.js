let EmployeeModel = require("../model/emp.model.js");
let SendRequestModel = require("../model/sendReq.model.js");
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


let sendRequest = (req,res)=>{
    let request = new SendRequestModel({
        Empid:req.body.Empid,
        pname:req.body.pname,
        request:req.body.request,
        status:req.body.status
    });
    request.save((err,result)=>{
        if(!err){
            res.send("Request sent");
        }else{
            res.send("Error!");
        }
    })
}



let getAllRequest =(req,res)=>{
    SendRequestModel.find({},(err,result)=>{
        if(!err){
            res.json(result);
        }
    })
}


module.exports={getAllEmployees,updateEmployeePassword,sendRequest , getAllRequest};