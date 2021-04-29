import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/Services/cart.service';

@Component({
  selector: 'app-add-item-cart',
  templateUrl: './add-item-cart.component.html',
  styleUrls: ['./add-item-cart.component.css']
})
export class AddItemCartComponent implements OnInit {
  cart = [];
  constructor(public cartSer:CartService) { }

  ngOnInit(): void {
  }

  //Adds an item you want to your cart

  addItem(addRef:any){
    console.log(addRef);
    this.cartSer.addToCart(addRef).subscribe(result=>{
      console.log(result);
    });

    //
    var cartAdded = {"Name":addRef.ProductName, "Price":addRef.ProductPrice, "Quantity":addRef.Quantity};
    this.cart.push(cartAdded);

    localStorage.setItem("cartItems",JSON.stringify(this.cart));
   }
  
}
