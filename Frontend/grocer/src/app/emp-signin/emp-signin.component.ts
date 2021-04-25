import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { employee } from '../model.emp';
import { Router } from '@angular/router';

@Component({
  selector: 'app-emp-signin',
  templateUrl: './emp-signin.component.html',
  styleUrls: ['./emp-signin.component.css']
})
export class EmpSigninComponent implements OnInit {
  constructor(public empService:EmployeeService, public router:Router) { }
  employees:Array<employee>
  Msg?:String;
  ngOnInit(): void {
  }

  Login(EmpRef:any){
    this.empService.retrieveAllEmployees().subscribe(result=>{
        let loginSuccess=false;
        let passFinder;
        for(let i =0;i<result.length;i++){
          if(EmpRef.id==result[i]._id && EmpRef.pass==result[i].password){
            loginSuccess=true;
            passFinder = i;
            break;
          }
        }
        if(loginSuccess){
          console.log("Logged in Successfully!");
          if(result[passFinder].password=='Defaultpass'){
            let tokenArray = new Uint32Array(1);
            crypto.getRandomValues(tokenArray);
            sessionStorage.setItem('token',tokenArray[0].toString());
            sessionStorage.setItem('id',result[passFinder]._id.toString());
            this.router.navigate(["PassChange"]);
          }else{
            let tokenArray = new Uint32Array(1);
            crypto.getRandomValues(tokenArray);
            sessionStorage.setItem('token',tokenArray[0].toString());
            this.router.navigate(["EmpDashboard"]);
          }
        }else{
          this.Msg = "Invalid Credientials";
        }
    });
  }

}
