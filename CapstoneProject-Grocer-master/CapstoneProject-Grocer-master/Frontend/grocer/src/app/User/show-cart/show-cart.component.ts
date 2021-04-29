import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/Services/cart.service';
import { Cart } from 'src/app/Services/model.cart';
import { Grocery } from 'src/app/Services/model.grocery';

@Component({
  selector: 'app-show-cart',
  templateUrl: './show-cart.component.html',
  styleUrls: ['./show-cart.component.css']
})
export class ShowCartComponent implements OnInit {
  cart?:Array<Cart>
  constructor(public cartSer:CartService) { }

  ngOnInit(): void {
    this.cartSer.retrieveCart().subscribe((results)=>{
      this.cart=results;
      console.log(this.cart);
    })
    
  }
  displayedColumns=['ProductID','ProductName','ProductPrice','Quantity'];
}
