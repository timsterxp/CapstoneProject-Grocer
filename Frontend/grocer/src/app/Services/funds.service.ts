import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Order } from 'src/app/order.model';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FundsService {

  constructor(public http:HttpClient) { }
  
  updateFunds(fundRef: any, userID: string) {
    return this.http.put("http://localhost:9090/funds/updateFunds/" + userID, fundRef, { responseType: "text" }); 
  }
  /*
  addFund(fundRef: any) {
    return this.http.post("http://localhost:9090/funds/addFunds", fundRef, { responseType: "text" });
  }*/
  getFunds(userEmail: string): Observable<Order[]>{
    return this.http.get<Order[]>("http://localhost:9090/funds/getFunds/" + userEmail);
  }
  
}
