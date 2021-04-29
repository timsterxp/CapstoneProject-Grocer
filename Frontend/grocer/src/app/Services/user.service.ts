import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public http: HttpClient) { }

  updateUser(userRef: any) {
    return this.http.put("http://localhost:9090/Users/updateInfo", userRef, { responseType: 'text' })
  };
}
