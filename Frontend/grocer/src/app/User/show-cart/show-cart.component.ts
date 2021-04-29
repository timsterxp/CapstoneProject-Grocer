import { Component, OnInit } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { CartService } from 'src/app/Services/cart.service';
import { Cart } from 'src/app/Services/model.cart';
import { Grocery } from 'src/app/Services/model.grocery';

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

  deleteItem(id:any){
    this.cartSer.deleteItem(id.ProductID).subscribe((result:string)=>{
      console.log(result);
      this.reloadComponent();
    })
 

  
  }

  reloadComponent(){
    let currentUrl=this.router.url;
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
      this.router.navigate([currentUrl]);
  });
    this.ngOnInit();
    var unhide=document.getElementById("hideCart");
    unhide.style.display="";
  }
 
  displayedColumns=['ProductID','ProductName','ProductPrice','Quantity', ' '];
}
