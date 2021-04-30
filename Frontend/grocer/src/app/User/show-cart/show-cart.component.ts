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

  ngOnInit(): void {
    this.cartSer.retrieveCart().subscribe((results)=>{
      this.cart=results;
      console.log(this.cart);
    })


    
  }

  updateQuantity(updateRef:any){
    let wantedQuantity=updateRef.Quantity;
    let id=updateRef.ProductID;
    this.cartSer.checkMax(id).subscribe(result=>{
      console.log(result)
      if (result?.length>0){
        console.log("Max quantity is: " + result[0].Inventory);
        if (result[0].Inventory>wantedQuantity){
          this.cartSer.updateQuantity(updateRef).subscribe((result:string)=>{
            console.log(result);
          })
        }
      }else{

      }    });
    
  
  }

  deleteItem(id:any){
    this.cartSer.deleteItem(id.ProductID).subscribe((result:string)=>{
      console.log(result);
      this.refreshMe();
    //  this.reloadComponent();
    })
 

  
  }
  test(itemRef:any){
    console.log(itemRef);
  }
  updateChanges(){
    
  }

  refreshMe(){
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(['UserHome']);
  }); 
  }

  ngOnChanges(){
    this.cartSer.retrieveCart().subscribe((results)=>{
      this.cart=results;
      console.log(this.cart);
    })
  }


 
  displayedColumns=['ProductID','ProductName','ProductPrice','Quantity', ' '];
}
