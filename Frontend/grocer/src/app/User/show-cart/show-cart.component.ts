import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/Services/cart.service';
import { Cart } from 'src/app/Services/model.cart';


@Component({
  selector: 'app-show-cart',
  templateUrl: './show-cart.component.html',
  styleUrls: ['./show-cart.component.css']
})
export class ShowCartComponent implements OnInit {
  cart?:Array<Cart>
  constructor(public cartSer:CartService, public router:Router) { }
  resultMsg?:string;

  //Populate items in cart
  ngOnInit(): void {
    this.cartSer.retrieveCart().subscribe((results)=>{
      this.cart=results;
      console.log(this.cart);
    })
  }

  //Update quantity based on what the user has entered into field
  //Checks for valid quantity
  //     - Above 0 amount
  //     - Does not exceed quantity amount available
  updateQuantity(updateRef:any){
    let id=updateRef.ProductID;
    var wantedQuantity = <HTMLInputElement>document.getElementById(updateRef.ProductID);
    if (+wantedQuantity.value<0){
      this.resultMsg="Invalid quantity amount";
      return;
    }
    let newRef={"ProductID":+id,"Quantity":+wantedQuantity.value};
    this.cartSer.checkMax(id).subscribe(result=>{
      if (result?.length>0){
        if (result[0].Inventory>+wantedQuantity.value){
          this.cartSer.updateQuantity(newRef).subscribe((result:string)=>{
            this.refreshMe();
          })
        }else {
          this.resultMsg="Not enough quantity for " + result[0].ProductName + ", please use a smaller number";
        }
      }else{
        this.resultMsg="Cannot locate product in stock, please remove from cart";

      }    });
    
  
  }

  //Delete item from cart
  deleteItem(id:any){
    this.cartSer.deleteItem(id.ProductID).subscribe((result:string)=>{
      console.log(result);
      this.refreshMe();
   
    })

  }

  //Refreshes the page when an important cart update happens  (delete/updatequantity)
  refreshMe(){
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(['UserHome']);
  }); 
  }
 
  displayedColumns=['ProductID','ProductName','ProductPrice','Quantity', ' '];
}
