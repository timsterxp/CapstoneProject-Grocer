import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/Services/cart.service';
import { Grocery } from 'src/app/Services/model.grocery';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {
  addedMsg?:string;
  groceryList?:Array<Grocery>
  cartList?:Array<Grocery>

  constructor(public cartSer:CartService) { }

  ngOnInit(): void {
  }


  //groceryList will be retrieved from database to set up list of items to select


  //deleteById to remove from cart

  deleteItem(id:any){
    this.cartSer.deleteItem(id).subscribe((result:string)=>{
      
    })
  }

  showItems(){
    var toDisplay=document.getElementById("hideItems");
    toDisplay.style.display="";
  }

  showAdd(){
    var toDisplay=document.getElementById("hideAdd");
    toDisplay.style.display="";
  }

  showCart(){
    var toDisplay=document.getElementById("hideCart");
    toDisplay.style.display="";
  }

  showQuantity(){
    var toDisplay=document.getElementById("hideQuantity");
    toDisplay.style.display="";
  }

  showDelete(){
    var toDisplay=document.getElementById("hideDelete");
    toDisplay.style.display="";
  }

  showCheckout() {
    var toDisplay = document.getElementById("hideCheckout");
    toDisplay.style.display = "";
  }

  showFunds() {
    var toDisplay = document.getElementById("hideFunds");
    toDisplay.style.display = "";
  }

  showOrderStatus() {
    var toDisplay = document.getElementById("hideOrderStatus");
    toDisplay.style.display = "";
  }

  showEditProfile() {
    var toDisplay = document.getElementById("hideEditProfile");
    toDisplay.style.display = "";
  }
}
