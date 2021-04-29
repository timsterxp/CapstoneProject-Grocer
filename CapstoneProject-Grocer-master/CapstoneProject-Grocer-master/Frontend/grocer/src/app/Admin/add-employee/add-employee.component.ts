import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/Services/admin.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  resultMsg?:string;
  constructor(public adminSer:AdminService) { }

  ngOnInit(): void {
  }

  //Adds an employee and displays the employee id afterwards
  addEmployee(employeeRef:any){
   this.adminSer.addEmployee(employeeRef).subscribe(result=>{
     console.log(result);
     this.resultMsg=result;
   });
  }
}
