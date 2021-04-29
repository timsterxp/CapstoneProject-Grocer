import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/employee.service';

@Component({
  selector: 'app-send-request',
  templateUrl: './send-request.component.html',
  styleUrls: ['./send-request.component.css']
})
export class SendRequestComponent implements OnInit {
  Msg?:String;
  ID?:Number;
  Status="Pending";
  constructor(public empService:EmployeeService) { }

  ngOnInit(): void {
    let Emp = sessionStorage.getItem('EmpID');
    this.ID = parseInt(Emp);
  }

  SendRequest(ProdRef:any){
    this.empService.sendRequest(ProdRef).subscribe(result=>{
        this.Msg=result;
    })
  }

}
