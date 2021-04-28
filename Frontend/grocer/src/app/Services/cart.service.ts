import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Grocery } from './model.grocery';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(public http:HttpClient) { }

  addToCart(addRef:any):any{
    return this.http.post("http://localhost:9090/userCart/addToCart",addRef) // to do, add code in back end
  }

  deleteItem(id:any):any{
    return this.http.delete("http://localhost:9090/user/deleteItem",id) // to do, add code in back end
  }

  updateQuantity(updateRef:any){
    return this.http.put("http://localhost:9090/user-home/update",updateRef) // to do, add code in back end
  }

  retrieveItems():Observable<Grocery[]>{
    return this.http.get<Grocery[]>("http://localhost:9090/userCart/showItems")

  }

}
