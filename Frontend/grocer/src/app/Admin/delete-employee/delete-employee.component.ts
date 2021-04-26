import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-delete-employee',
  templateUrl: './delete-employee.component.html',
  styleUrls: ['./delete-employee.component.css']
})
export class DeleteEmployeeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  delete(empID:any){
    console.log(empID);
    //Retrieve from database and delete
  }

}
