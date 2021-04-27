import { Component, OnInit } from '@angular/core';
import { TicketService } from 'src/app/Services/ticket.service';

@Component({
  selector: 'app-raise-ticket',
  templateUrl: './raise-ticket.component.html',
  styleUrls: ['./raise-ticket.component.css']
})
export class RaiseTicketComponent implements OnInit {

  constructor(public ticketSer:TicketService) { }

  ngOnInit(): void {
    //Pull saved cart if logout early?
  }
  
 sendTicket(ticketRef:any){
  console.log(ticketRef);
  this.ticketSer.storeTicketDetails(ticketRef);
 }

 hideMe(){
  var showNow=document.getElementById("hideToggleTicket");
  showNow.style.display="none";
 }
}
