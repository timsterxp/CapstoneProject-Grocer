import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-emp-send-request',
  templateUrl: './emp-send-request.component.html',
  styleUrls: ['./emp-send-request.component.css']
})
export class EmpSendRequestComponent implements OnInit {
  Msg?:String;
  constructor(public empService:EmployeeService) { }

  ngOnInit(): void {
  }

  SendRequest(ProdRef:any){
    this.empService.sendRequest(ProdRef).subscribe(result=>{
        this.Msg=result;
    })
  }

}
