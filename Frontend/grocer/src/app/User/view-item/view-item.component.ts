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
  resultMsg?:string
  constructor(public cartSer:CartService) {
 
   }

  ngOnInit(): void {
   this.cartSer.retrieveItems().subscribe(result=>this.cart=result);
   console.log(this.cart);
  }

  test(ref:any){
    console.log(ref);
    var itemObj= {ProductID:ref.ProductID,Quantity:ref.Inventory};
    console.log(itemObj);
    this.addToCart(itemObj);
  }

  addToCart(addRef:any){
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
  }

  
  displayedColumns=['ProductId','ProductName','ProductDescription','ProductPrice','Inventory'," "];
}
