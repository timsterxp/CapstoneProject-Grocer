import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/Services/cart.service';

@Component({
  selector: 'app-view-item',
  templateUrl: './view-item.component.html',
  styleUrls: ['./view-item.component.css']
})
export class ViewItemComponent implements OnInit {

  constructor(public cartSer:CartService) { }

  ngOnInit(): void {
  }

addToCart(addRef:any){
  console.log("Attempt to add "+addRef);
this.cartSer.addToCart(addRef).subscribe(result=>{
  console.log(result);
});
}

}
