  
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

  constructor(public proService:ProductService, public router:Router) { }
  Msg:any;

  ngOnInit(): void {
  }

  addItem(productRef:any){
    console.log(productRef);
    this.proService.storeProductDetailsInfo(productRef); 
    this.Msg="Product Stored"  

  }
  back(){
    this.router.navigate(["AdminHome"]);
  }
  

}