import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TicketService {
 
  constructor(public http:HttpClient) { }

  storeTicketDetails(TicketRef:any){
    return this.http.post("http://localhost:9090/userTest/ticket",TicketRef,{responseType:'text'});
  }
}
