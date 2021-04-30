import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/employee.service';
import { Ticket } from 'src/app/ticket.model';

@Component({
  selector: 'app-unlock-user',
  templateUrl: './unlock-user.component.html',
  styleUrls: ['./unlock-user.component.css']
})
export class UnlockUserComponent implements OnInit {
  tickets?:Array<Ticket>;
  Msg?:String;
  constructor(public empService:EmployeeService) { }

  ngOnInit(): void {
    this.empService.getAllTickets().subscribe(result=>{this.tickets=result});
  }


  Unlock(UserRef:any){
    this.empService.unlockAccount(UserRef).subscribe((result:String)=>{
        let email = UserRef.email;
        this.empService.deleteFromTable(email).subscribe((res:String)=>{
          console.log(res);
        })
        this.Msg=result;
    })
  }

}
