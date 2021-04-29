import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

  constructor(public proService:ProductService) { }

  ngOnInit(): void {
  }

  addItem(productRef:any){
    console.log(productRef);
    this.proService.storeProductDetailsInfo(productRef);   

  }

}
