import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {

  constructor(public router:Router) { }

  ngOnInit(): void {
  }

  addProduct(){
    //console.log("Event generated");
    //console.log(loginRef)
    
      this.router.navigate(["AddItem"]);
    
  }

  deleteProduct(){
    //console.log("Event generated");
    //console.log(loginRef)
    
      this.router.navigate(["DeleteItem"]);
    
  }

  updateProduct(){
    //console.log("Event generated");
    //console.log(loginRef)
    
      this.router.navigate(["UpdateItem"]);
    
  }

  viewRequests(){

  }

}
