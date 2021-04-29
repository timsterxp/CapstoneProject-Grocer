import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { admin } from 'src/app/model.admin';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(public http:HttpClient) { }

  retrieveAllAdmins():Observable<admin[]>{
    return this.http.get<admin[]>("http://localhost:9090/admin/Adminlogin");
  }
}
