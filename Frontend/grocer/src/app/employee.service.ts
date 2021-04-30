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
  //getting all employees from the database
  retrieveAllEmployees():Observable<employee[]>{
    return this.http.get<employee[]>("http://localhost:9090/employee/loginCheck");
  }
  // updating the employee password
  updatePassword(PassRef:any):any{
    return this.http.put("http://localhost:9090/employee/updateEmployeePassword",PassRef,{responseType:'text'});
  }
  // pushing to the EmployeeRequest collection
  sendRequest(ProdRef:any){
    return this.http.post("http://localhost:9090/employee/sendRequest",ProdRef,{responseType:'text'});
  }
  // Updating in the Order collection
  updateOrderStatus(OrderRef:any):any{
    return this.http.put("http://localhost:9090/employee/updateOrderStatus",OrderRef,{responseType:'text'});
  }
 // Retrieveing all the Order 
  getAllOrders():Observable<order[]>{
    return this.http.get<order[]>("http://localhost:9090/employee/getAllOrders");
  }
  // Retrieveing all the user tickets for unlcoking
  getAllTickets():Observable<Ticket[]>{
    return this.http.get<Ticket[]>("http://localhost:9090/userTest/allTickets");
  }
 // Updating the user account by updating in the backend
  unlockAccount(UserRef:any):any{
    return this.http.put("http://localhost:9090/user/unlockAccount",UserRef,{responseType:'text'});
  }
  // Deleting the user from the userticket collection 
  deleteFromTable(email:any):any{
    return this.http.delete("http://localhost:9090/userTest/delByEmail/"+email);
  }
  // Retrieveing the specific order based on the order number form order collection
  getOrderByNum(num:any):Observable<order[]>{
    return this.http.get<order[]>("http://localhost:9090/employee/getOrderbyNumber/"+num);
  }
  // Updating the user Funds key on the backend
  refundUser(order:any):any{
    return this.http.put("http://localhost:9090/employee/userRefund",order,{responseType:'text'});
  }
  
}
