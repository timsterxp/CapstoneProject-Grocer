import { Component, OnInit } from '@angular/core';
import { employee } from 'src/app/model.emp';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/employee.service';

@Component({
  selector: 'app-emp-signin',
  templateUrl: './emp-signin.component.html',
  styleUrls: ['./emp-signin.component.css']
})
export class EmpSigninComponent implements OnInit {

  constructor(public empService:EmployeeService,public router:Router) { }
  employees:Array<employee>
  Msg?:String;
  ngOnInit(): void {
  }

  Login(EmpRef:any){
    this.empService.retrieveAllEmployees().subscribe(result=>{      // Getting all employees in an array to validate the logoin credientials
      let loginSuccess=false; 
      let passFinder;
      for(let i =0;i<result.length;i++){
        if(EmpRef.id==result[i]._id && EmpRef.pass==result[i].password){ // if the credientials match we mark the flag loginSuccess as true and brak out of the loop
          loginSuccess=true;
          passFinder = i;
          break;
        }
      }
      if(loginSuccess){                                                // if the loginSuccess is true we check if the password used was default or not. If default the employee is redirected to password reset page or else to the employee dashboard.
        console.log("Logged in Successfully!");
        if(result[passFinder].password=='DefaultPass'){
          let tokenArray = new Uint32Array(1);
          crypto.getRandomValues(tokenArray);                           // generating an array with random element as the token used in authguard
          sessionStorage.setItem('token',tokenArray[0].toString());      // storing it in the session storage        
          sessionStorage.setItem('id',result[passFinder]._id.toString());  // storing the emp id in the session storage
          this.router.navigate(["PassChange"]);
        }else{
          let tokenArray = new Uint32Array(1);
          crypto.getRandomValues(tokenArray);
          sessionStorage.setItem('token',tokenArray[0].toString());
          let User = result[passFinder].fname.toString()+" "+ result[passFinder].lname.toString();     // storing the employee name in sessions storage
          sessionStorage.setItem('User',User);
          sessionStorage.setItem('id',result[passFinder]._id.toString());
          this.router.navigate(["EmpDashboard"]);
        }
      }else{
        this.Msg = "Invalid Credientials";
      }
  });
  }
}
