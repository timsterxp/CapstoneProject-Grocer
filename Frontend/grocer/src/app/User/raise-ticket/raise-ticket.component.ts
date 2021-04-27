import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-raise-ticket',
  templateUrl: './raise-ticket.component.html',
  styleUrls: ['./raise-ticket.component.css']
})
export class RaiseTicketComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
 sendTicket(ticketRef:any){
  console.log(ticketRef);
 }

 hideMe(){
  var showNow=document.getElementById("hideToggleTicket");
  showNow.style.display="none";
 }
}
