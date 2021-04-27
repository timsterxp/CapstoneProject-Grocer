import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/Services/cart.service';
@Component({
  selector: 'app-delete-item-cart',
  templateUrl: './delete-item-cart.component.html',
  styleUrls: ['./delete-item-cart.component.css']
})
export class DeleteItemCartComponent implements OnInit {


  constructor(public cartSer:CartService) { }

  ngOnInit(): void {
  }

  deleteItem(deleteRef:any){
    console.log(deleteRef);
    
  }
/*

  deleteItem(id:any){
    this.cartSer.deleteItem(id).subscribe((result:string)=>{
      
    })
  }
  */
}
