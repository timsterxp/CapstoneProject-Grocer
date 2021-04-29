import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/Services/cart.service';

@Component({
  selector: 'app-add-item-cart',
  templateUrl: './add-item-cart.component.html',
  styleUrls: ['./add-item-cart.component.css']
})
export class AddItemCartComponent implements OnInit {

  constructor(public cartSer:CartService) { }

  ngOnInit(): void {
  }

  addItem(addRef:any){
    console.log(addRef);
    this.cartSer.addToCart(addRef).subscribe(result=>{
      console.log(result);
    });
   }
  
}
