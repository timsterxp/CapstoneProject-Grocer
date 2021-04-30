import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  constructor(public cartSer:CartService,public router:Router) {
 
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
  refreshMe(){
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(['UserHome']);
      this.resultMsg="Item has been added to cart"
  }); 
  }
  addToCart(addRef:any){

    let ProductID=addRef.ProductID
    this.cartSer.checkCart(ProductID).subscribe(result=>{
      if (result?.length>0){
        this.resultMsg="Item already exists in your cart, please use Update Quantity instead";
        return;
      }else {
        console.log("Retrieving Item"); 
        this.cartSer.retrieveItem(addRef.ProductID).subscribe(result=>{
          console.log(result)
          if (result?.length>0){
     
            var itemToAdd={ProductID:addRef.ProductID,ProductName:result[0].ProductName,ProductPrice:result[0].ProductPrice,Quantity:1}
            this.cartSer.addToCart(itemToAdd).subscribe(result=>{
              console.log(result);
              this.ngOnInit()
              this.refreshMe();
              this.resultMsg="Item has been added to cart"
              
             });
         
        }
        })
      }
    })
  }

  
  displayedColumns=['ProductId','ProductName','ProductDescription','ProductPrice','Inventory'," "];
}
