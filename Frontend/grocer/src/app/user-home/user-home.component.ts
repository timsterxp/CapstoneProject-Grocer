import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Grocery } from '../model.grocery';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {
  addedMsg?:string;
  groceryList?:Array<Grocery>
  cartList?:Array<Grocery>

  constructor(public cartSer:CartService) { }

  ngOnInit(): void {
  }

  addToCart(id:any,gname:string,price:number){
    this.cartSer.addToCart(id,gname,price).subscribe((result:string)=>{
      this.addedMsg=result;
    })
  }

  //groceryList will be retrieved from database to set up list of items to select


  //deleteById to remove from cart

  deleteItem(id:any){
    this.cartSer.deleteItem(id).subscribe((result:string)=>{
      
    })
  }

  //updateQuantity to change quantity in cart (as well as double check that groceryList has enough quantity)
  updateQuantity(id:any,quantity:any){
    this.cartSer.updateQuantity(id,quantity).subscribe((result:string)=>{
      
    })
  }
}
