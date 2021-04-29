import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/employee.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  Msg?:String;
  ID:Number;
  constructor(public empService:EmployeeService) { }

  ngOnInit(): void {
    let Emp = sessionStorage.getItem('EmpID');
    this.ID = parseInt(Emp);
  }
  Confirm(PassRef:any){
    if(PassRef.Newpass!=PassRef.Confpass){
      this.Msg = "New Password and Confirm Password don't match";
    }else if(PassRef.Newpass=='Defaultpass'){
      this.Msg = "New Password cannot be the same as the default password";
    }else{
      this.empService.updatePassword(PassRef).subscribe((result:String)=>{
        this.Msg=result;
      })
    }
  }
  
}
