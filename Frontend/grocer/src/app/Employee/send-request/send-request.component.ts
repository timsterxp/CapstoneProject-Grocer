import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/employee.service';

@Component({
  selector: 'app-send-request',
  templateUrl: './send-request.component.html',
  styleUrls: ['./send-request.component.css']
})
export class SendRequestComponent implements OnInit {
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
