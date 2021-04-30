import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/model.product';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-delete-item',
  templateUrl: './delete-item.component.html',
  styleUrls: ['./delete-item.component.css']
})
export class DeleteItemComponent implements OnInit {

  products?:Array<Product>
  Msg?:any

  constructor(public proService:ProductService, public router:Router) { }

  ngOnInit(): void {
    this.proService.retrieveAllProductDetails().subscribe(result=>this.products=result);
  }

  delete(id:any){
    this.proService.deleteProductById(id).subscribe((result:string)=>{
      console.log(result);
      
    }) 
    this.Msg="Product Deleted"
    this.router.navigate(["DeleteItem"]);
}


back(){
  this.router.navigate(["AdminHome"]);
}
}