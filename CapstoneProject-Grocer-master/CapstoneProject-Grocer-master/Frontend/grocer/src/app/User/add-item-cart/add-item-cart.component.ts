import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/Services/cart.service';

@Component({
  selector: 'app-add-item-cart',
  templateUrl: './add-item-cart.component.html',
  styleUrls: ['./add-item-cart.component.css']
})
export class AddItemCartComponent implements OnInit {
  cart = [];
  resultMsg?:string;
  constructor(public cartSer:CartService) { }

  ngOnInit(): void {
  }

  //Adds an item you want to your cart, retrieves by id and gets other info to place into cart

  addItem(addRef:any){
    console.log(addRef);
    this.cartSer.checkCart(addRef.ProductID).subscribe(result=>{
      if (result?.length>0){
        this.resultMsg="Item already exists in your cart, please use Update Quantity instead";
        return;
      }else {
        this.cartSer.retrieveItem(addRef.ProductID).subscribe(result=>{
          console.log(result)
          if (result?.length>0){
            console.log("Info is " +result[0].ProductName+result[0].ProductPrice);
            if (result[0].Inventory>addRef.Quantity){
            var itemToAdd={ProductID:addRef.ProductID,ProductName:result[0].ProductName,ProductPrice:result[0].ProductPrice,Quantity:addRef.Quantity}
            this.cartSer.addToCart(itemToAdd).subscribe(result=>{
              console.log(result);
             });
          }else {
            this.resultMsg="Sorry there is not enough product, please choose a lower quantity";
          }
        }
        })
      }
    })
  

   

    // Backup code for checkout/order status
    var cartAdded = {"Name":addRef.ProductName, "Price":addRef.ProductPrice, "Quantity":addRef.Quantity};
    this.cart.push(cartAdded);

    localStorage.setItem("cartItems",JSON.stringify(this.cart));
   }
  
}
