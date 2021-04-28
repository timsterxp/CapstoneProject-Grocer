import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/Services/cart.service';
import { Grocery } from 'src/app/Services/model.grocery';


@Component({
  selector: 'app-view-item',
  templateUrl: './view-item.component.html',
  styleUrls: ['./view-item.component.css']
})
export class ViewItemComponent implements OnInit {
  cart?:Array<Grocery>
  constructor(public cartSer:CartService) {
 
   }

  ngOnInit(): void {
   this.cartSer.retrieveItems().subscribe(result=>this.cart=result);
   console.log(this.cart);
  }

  
  displayedColumns=['ProductId','ProductName','ProductDescription','ProductPrice','Inventory'];
}
