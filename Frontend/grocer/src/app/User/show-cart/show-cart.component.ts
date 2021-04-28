import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/Services/cart.service';
import { Grocery } from 'src/app/Services/model.grocery';

@Component({
  selector: 'app-show-cart',
  templateUrl: './show-cart.component.html',
  styleUrls: ['./show-cart.component.css']
})
export class ShowCartComponent implements OnInit {
  cart =[];
  constructor(public cartSer:CartService) { }

  ngOnInit(): void {
    
  }
  displayedColumns=['ProductName','Price','Quantity'];
}
