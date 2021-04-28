import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(public http:HttpClient) { }
  
  addEmployee(EmployeeRef:any){
    return this.http.post("http://localhost:9090/employeedb/addEmployee",EmployeeRef,{responseType:'text'});
  }

  deleteEmployee(email:any){
    return this.http.delete("http://localhost:9090/employeedb/deleteEmployee/"+email,{responseType:'text'});
  }
}
