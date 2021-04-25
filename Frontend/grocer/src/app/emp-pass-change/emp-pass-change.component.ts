import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-emp-pass-change',
  templateUrl: './emp-pass-change.component.html',
  styleUrls: ['./emp-pass-change.component.css']
})
export class EmpPassChangeComponent implements OnInit {
  Msg?:String;
  ID:Number;
  constructor(public empService:EmployeeService, public router:Router) { }

  ngOnInit(): void {
    let id=sessionStorage.getItem('id');
    this.ID = parseInt(id);
  }

  Confirm(PassRef:any){
    if(PassRef.Newpass!=PassRef.Confpass){
      this.Msg = "New Password and Confirm Password don't match";
    }else if(PassRef.Newpass=='Defaultpass'){
      this.Msg = "New Password cannot be the same as the default password";
    }else{
      this.empService.updatePassword(PassRef).subscribe((result:String)=>{
        this.Msg=result;
        if(this.Msg=="Password Updated Successfully!"){
          this.Msg = result + " Redirecting to Login Page. Use your new password to login";
        }
        sessionStorage.removeItem('token');
        sessionStorage.removeItem('id');
        setTimeout(()=>{
        this.router.navigate(["EmpLogin"])},5000);
      })
    }
  }

}
