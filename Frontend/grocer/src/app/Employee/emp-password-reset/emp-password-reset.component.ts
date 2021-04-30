import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/employee.service';

@Component({
  selector: 'app-emp-password-reset',
  templateUrl: './emp-password-reset.component.html',
  styleUrls: ['./emp-password-reset.component.css']
})
export class EmpPasswordResetComponent implements OnInit {
  Msg?:String;
  ID:Number;
  constructor(public empService:EmployeeService, public router:Router) { }

  ngOnInit(): void {
    let id=sessionStorage.getItem('id');                    // retreiveing the user id 
    this.ID = parseInt(id);
  }

  Confirm(PassRef:any){
    if(PassRef.Newpass!=PassRef.Confpass){                          
      this.Msg = "New Password and Confirm Password don't match";
    }else if(PassRef.Newpass=='Defaultpass'){
      this.Msg = "New Password cannot be the same as the default password";
    }else{
      this.empService.updatePassword(PassRef).subscribe((result:String)=>{                       // if the new password passes the checks the empservice calls a update function on the database and the password is updated
        this.Msg=result;
        if(this.Msg=="Password Updated Successfully!"){
          this.Msg = result + " Redirecting to Login Page. Use your new password to login";       // after the update the user is redirected to the employee login page. 
        }
        sessionStorage.removeItem('token');
        sessionStorage.removeItem('id');
        setTimeout(()=>{
        this.router.navigate(["EmpLogin"])},5000);
      })
    }
  }

}
