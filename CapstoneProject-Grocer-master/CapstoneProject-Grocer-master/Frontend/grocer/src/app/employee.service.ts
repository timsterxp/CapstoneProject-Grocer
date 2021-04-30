import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { employee } from 'src/app/model.emp';
import {order} from 'src/app/model.order';
import { Ticket } from './ticket.model';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(public http:HttpClient) { }
  retrieveAllEmployees():Observable<employee[]>{
    return this.http.get<employee[]>("http://localhost:9090/employee/loginCheck");
  }

  updatePassword(PassRef:any):any{
    return this.http.put("http://localhost:9090/employee/updateEmployeePassword",PassRef,{responseType:'text'});
  }

  sendRequest(ProdRef:any){
    return this.http.post("http://localhost:9090/employee/sendRequest",ProdRef,{responseType:'text'});
  }

  updateOrderStatus(OrderRef:any):any{
    return this.http.put("http://localhost:9090/employee/updateOrderStatus",OrderRef,{responseType:'text'});
  }

  getAllOrders():Observable<order[]>{
    return this.http.get<order[]>("http://localhost:9090/employee/getAllOrders");
  }

  getAllTickets():Observable<Ticket[]>{
    return this.http.get<Ticket[]>("http://localhost:9090/userTest/allTickets");
  }

  unlockAccount(UserRef:any):any{
    return this.http.put("http://localhost:9090/user/unlockAccount",UserRef,{responseType:'text'});
  }

  deleteFromTable(email:any):any{
    return this.http.delete("http://localhost:9090/userTest/delByEmail/"+email);
  }

  getOrderByNum(num:any):Observable<order[]>{
    return this.http.get<order[]>("http://localhost:9090/employee/getOrderbyNumber/"+num);
  }

  refundUser(order:any):any{
    return this.http.put("http://localhost:9090/employee/userRefund",order,{responseType:'text'});
  }
  
}
