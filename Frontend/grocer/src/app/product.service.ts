import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(public http:HttpClient) { }

  storeProductDetailsInfo(productRef:any){
    this.http.post("http://localhost:9090/product/addProduct",productRef,{responseType:'text'}).
    subscribe(result=>console.log(result),error=>console.log(error))
   // return this.http.post("http://localhost:9090/product/addProduct",productRef,{responseType:'text'});
  }

  deleteProductById(id:any):any{
    return this.http.delete("http://localhost:9090/product/deleteProduct/"+id, {responseType:'text'});
  }

  

  updateProductPrice(productRef:any):any{
    return this.http.put("http://localhost:9090/product/updateProduct", productRef, {responseType:'text'});
  }
}