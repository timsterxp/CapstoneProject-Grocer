import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { order } from 'src/app/model.order';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FundsService {

  constructor(public http:HttpClient) { }
  /*
  updateFunds(fundRef: any) {
    return this.http.put("http://localhost:9090/funds/addFunds", fundRef, { responseType: "text" }); 
  }*/
  addFund(fundRef: any) {
    return this.http.post("http://localhost:9090/funds/addFunds", fundRef, { responseType: "text" });
  }
  getFunds(userID: any): Observable<order[]>{
    return this.http.get<order[]>("http://localhost:9090/funds/getFunds/" + userID);
  }
  
}