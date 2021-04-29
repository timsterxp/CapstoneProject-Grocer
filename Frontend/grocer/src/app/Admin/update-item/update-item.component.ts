
import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-update-item',
  templateUrl: './update-item.component.html',
  styleUrls: ['./update-item.component.css']
})

export class UpdateItemComponent implements OnInit {

  updateMsg?:string;
  constructor(public prodSer:ProductService) { }

  ngOnInit(): void {
  }

  updateItem(productRef:any){
    console.log(productRef);
    this.prodSer.updateProductPrice(productRef).subscribe((result:string)=> {
      this.updateMsg=result;
    });
  }

}