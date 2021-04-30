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
    this.empService.unlockAccount(UserRef).subscribe((result:String)=>{  // We simply use the email id if the user to set the value locked = false and loginattempts = 0 to unlock the user using this function.
        let email = UserRef.email;
        for(let i=0;i<this.tickets.length;i++){
          if(this.tickets[i].UserEmail==email){                          // We delete the user from the array tickets to referesh our table.
              this.tickets.splice(i,1);
          }
        }
        this.empService.deleteFromTable(email).subscribe((res:String)=>{  // finally we delete the user form the collection as well. 
          console.log(res);
        })
        this.Msg=result;
    })
  }

}
