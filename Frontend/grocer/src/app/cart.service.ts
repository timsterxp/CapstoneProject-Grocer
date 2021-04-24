import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(public http:HttpClient) { }

  addToCart(id:any,gname:string,price:number):any{
    return this.http.post("http://localhost:9090/user-home/addToCart") // to do, add code in back end
  }

  deleteItem(id:any):any{
    return this.http.delete("http://localhost:9090/user-home/deleteItem") // to do, add code in back end
  }

  updateQuantity(id:any,quantity:any):any{
    return this.http.put("http://localhost:9090/user-home/update") // to do, add code in back end
  }

}
