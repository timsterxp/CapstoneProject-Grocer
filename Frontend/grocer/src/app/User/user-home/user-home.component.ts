import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
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
  condition=true;
  constructor(public cartSer:CartService, public router:Router) { }

  ngOnInit(): void {
  }


  //Deletes item by ID, is connected with delete icon
  deleteItem(id:any){
    this.cartSer.deleteItem(id).subscribe((result:string)=>{
      
    })
  }
  

  //Called when deleting/adding
  refreshMe(){
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(['UserHome']);
  }); 
  }

  //Toggle feature by changing style to none or ''
  toggleFeature(id:any){
    var toDisplay=document.getElementById(id);
    if (toDisplay.style.display=="none"){
      toDisplay.style.display="";
    }else {
      toDisplay.style.display="none";
    }
  }

  //Logout
  Logout(){
    this.router.navigate(["UserLogin"]);
  }

}
