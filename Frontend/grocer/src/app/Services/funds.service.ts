import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Order } from 'src/app/order.model';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FundsService {

  constructor(public http:HttpClient) { }

  addFund(fundRef: any) {
    return this.http.post("http://localhost:9090/funds/addFunds", fundRef, { responseType: "text" }); 
  }
  getFunds(userID: number): Observable<Order[]>{
    return this.http.get<Order[]>("http://localhost:9090/funds/getFunds/" + userID);
  }

}