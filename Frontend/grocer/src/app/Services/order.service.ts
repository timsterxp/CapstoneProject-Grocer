
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {Observable} from 'rxjs';
import {order} from 'src/app/model.order';
import { orderReq } from '../model.orderReq';


@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(public http: HttpClient) { }

  addOrder(OrderRef: any) {
    return this.http.post("http://localhost:9090//addOrder", OrderRef, { responseType: 'text' });
  }

  addnewOrder(OrderRef: any) {
    return this.http.post("http://localhost:9090/order/addOrder", OrderRef, { responseType: 'text' });
  }

  getOrders():Observable<order[]>{
    return this.http.get<order[]>("http://localhost:9090/employee/getAllOrders");
  }


  // getAllOrders():Observable<order[]>{
  //   return this.http.get<order[]>("http://localhost:9090/employee/getAllOrders");
  // }

  
  getAllOrders():Observable<orderReq[]>{
    return this.http.get<orderReq[]>("http://localhost:9090/employee/getAllOrders");
  }


  

}
