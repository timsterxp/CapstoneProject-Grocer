import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-update-item',
  templateUrl: './update-item.component.html',
  styleUrls: ['./update-item.component.css']
})

export class UpdateItemComponent implements OnInit {

  updateMsg?:string;
  Msg?:any
  constructor(public prodSer:ProductService, public router:Router) { }

  ngOnInit(): void {
  }

  updateItem(productRef:any){
    console.log(productRef);
    this.prodSer.updateProductPrice(productRef).subscribe((result:string)=> {
      this.updateMsg=result;
    });
  }
  back(){
    this.router.navigate(["AdminHome"]);
  }
}