import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/Services/cart.service';


@Component({
  selector: 'app-update-quantity',
  templateUrl: './update-quantity.component.html',
  styleUrls: ['./update-quantity.component.css']
})
export class UpdateQuantityComponent implements OnInit {

  constructor(public cartSer:CartService) { }

  ngOnInit(): void {
  }
  
  //updateQuantity to change quantity in cart (as well as double check that groceryList has enough quantity)
  updateQuantity(updateRef:any){
    this.cartSer.updateQuantity(updateRef).subscribe((result:string)=>{
      
    })
  }
}
