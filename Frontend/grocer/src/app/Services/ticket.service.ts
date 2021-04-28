import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TicketService {
 
  constructor(public http:HttpClient) { }

  storeTicketDetails(ticketRef){
    this.http.post("http://localhost:9090/UserLogin/Ticket",ticketRef).subscribe(result=>console.log(result),error=>console.log(error));
  }
}
