import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public http:HttpClient) { }
  getAllusers():Observable<User[]>{
    return this.http.get<User[]>("http://localhost:9090/user/alluser");
  }

  loginFail(userRef:any):any{
    return this.http.put("http://localhost:9090/user/loginFail",userRef,{responseType:'text'});
  }

  getUserByEmail(email:any):Observable<User[]>{
    return this.http.get<User[]>("http://localhost:9090/user/userByEmail/"+email);
    
  }

  lockAccount(userRef:any):any{
    return this.http.put("http://localhost:9090/user/lockAccount",userRef,{responseType:'text'});
  
  }


  storeUserDetails(productRef:any):any{
   return this.http.post("http://localhost:9090/user/signup" , productRef , {responseType : 'text' });
  


    // updatePassword(PassRef:any):any{
    //   return this.http.put("http://localhost:9090/employee/updateEmployeePassword",PassRef,{responseType:'text'});
    // }


    // storeProductDetailsInfo(productRef:any){
    //   this.http.post(this.ipAddress+"/product/storeProductDetails",productRef,{responseType:"text"}).
    //   subscribe(result=>console.log(result),error=>console.log(error));
    // }
  
    
} 

  
}
