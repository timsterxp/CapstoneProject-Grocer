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
  addedMsg?: string;
  groceryList?: Array<Grocery>
  cartList?: Array<Grocery>
  condition = true;
  constructor(public cartSer: CartService, public router: Router) { }

  ngOnInit(): void {
  }



  deleteItem(id: any) {
    this.cartSer.deleteItem(id).subscribe((result: string) => {

    })
  }

  refreshMe() {
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(['UserHome']);
    });
  }


  toggleFeature(id: any) {
    var toDisplay = document.getElementById(id);
    if (toDisplay.style.display == "none") {
      toDisplay.style.display = "";
    } else {
      toDisplay.style.display = "none";
    }
  }

  showFeature(id: any) {
    var toDisplay = document.getElementById(id);
    toDisplay.style.display = "";
  }

  Logout() {
    this.router.navigate(["UserLogin"]);
  }

}
