import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/Services/admin.service';

@Component({
  selector: 'app-delete-employee',
  templateUrl: './delete-employee.component.html',
  styleUrls: ['./delete-employee.component.css']
})
export class DeleteEmployeeComponent implements OnInit {

  constructor(public adminSer:AdminService) { }

  ngOnInit(): void {
  }

  delete(empEmail:any){
    this.adminSer.deleteEmployee(empEmail).subscribe((result:string)=>{
      console.log(result);
    })
    //Retrieve from database and delete
  }

}
