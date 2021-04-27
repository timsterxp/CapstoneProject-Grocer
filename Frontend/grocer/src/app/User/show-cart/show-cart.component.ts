import { Component, OnInit } from '@angular/core';
import { Grocery } from 'src/app/Services/model.grocery';

@Component({
  selector: 'app-show-cart',
  templateUrl: './show-cart.component.html',
  styleUrls: ['./show-cart.component.css']
})
export class ShowCartComponent implements OnInit {
  cart?:Array<Grocery>;
  constructor() { }

  ngOnInit(): void {
  }
  displayedColumns=['ProductName','Quantity'];
}
