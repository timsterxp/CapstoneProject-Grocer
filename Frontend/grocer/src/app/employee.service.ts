import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { employee } from './model.emp';

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
  
}

