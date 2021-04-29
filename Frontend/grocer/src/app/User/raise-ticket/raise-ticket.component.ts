import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TicketService } from 'src/app/Services/ticket.service';

@Component({
  selector: 'app-raise-ticket',
  templateUrl: './raise-ticket.component.html',
  styleUrls: ['./raise-ticket.component.css']
})
export class RaiseTicketComponent implements OnInit {
email?:String;
Msg?:String;
  constructor(public ticketSer:TicketService,public router:Router) { }

  ngOnInit(): void {
    this.email = sessionStorage.getItem("user");
  }
  
 sendTicket(TicketRef:any){
  console.log(TicketRef);
  this.ticketSer.storeTicketDetails(TicketRef).subscribe((result:String)=>{
    this.Msg = result+" "+"Redirecting to Login Page";
    sessionStorage.removeItem("user");
    setTimeout(()=>{
      this.router.navigate(["UserLogin"])},3000);
    })
  }
 }

