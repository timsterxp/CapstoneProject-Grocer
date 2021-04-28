import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-view-item',
  templateUrl: './view-item.component.html',
  styleUrls: ['./view-item.component.css']
})
export class ViewItemComponent implements OnInit {
  cart = [];
  constructor() {
 
   }

  ngOnInit(): void {
    let prevCart = JSON.parse(localStorage.getItem("cartItems"));
    if  (prevCart==null){
      return;
    }else{
      this.cart=prevCart;
    }
  }

  addToCart(itemName:string,itemPrice:Number,itemQuantity:Number){
    let alreadyExists:boolean=false;
    for (let i = 0; i <this.cart.length;i++){
      if (this.cart[i].Name==itemName){
        
        alreadyExists=true;
        this.cart[i].Quantity+=1;
        localStorage.setItem("cartItems",JSON.stringify(this.cart));
        break;
      }
    }

    if  (!alreadyExists){
    var item  = {
      Name:itemName,
      Price:itemPrice,
      Quantity:itemQuantity
    }
    
    this.cart.push(item);
    localStorage.setItem("cartItems",JSON.stringify(this.cart));
  }
}

}

