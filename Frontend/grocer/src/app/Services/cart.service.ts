import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Grocery } from './model.grocery';
import { Cart } from './model.cart';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(public http:HttpClient) { }

  addToCart(addRef:any):any{
    return this.http.post("http://localhost:9090/userCart/addToCart",addRef,{responseType:'text'}) // to do, add code in back end
  }

  deleteItem(id:any):any{
    return this.http.delete("http://localhost:9090/userCart/deleteItem/"+id,{responseType:'text'}) // to do, add code in back end
  }

  updateQuantity(updateRef:any){
    return this.http.put("http://localhost:9090/userCart/update",updateRef,{responseType:'text'}) // to do, add code in back end
  }

  retrieveItems():Observable<Grocery[]>{
    return this.http.get<Grocery[]>("http://localhost:9090/userCart/showItems")

  }

  retrieveCart():Observable<Cart[]>{
    return this.http.get<Cart[]>("http://localhost:9090/userCart/getCart")
  }

}
