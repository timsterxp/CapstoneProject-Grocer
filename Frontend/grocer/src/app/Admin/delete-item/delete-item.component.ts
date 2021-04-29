
import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-delete-item',
  templateUrl: './delete-item.component.html',
  styleUrls: ['./delete-item.component.css']
})
export class DeleteItemComponent implements OnInit {

  constructor(public proService:ProductService) { }

  ngOnInit(): void {
  }

  delete(id:any){
    this.proService.deleteProductById(id).subscribe((result:string)=>{
      console.log(result);
    })

}
}