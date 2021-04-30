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

  logout() {
    sessionStorage.removeItem("token");
    this.router.navigate(["AdminLogin"]);
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

    this.router.navigate(["viewRequest"]);

  }

  showAddEmployee(){
    var toDisplay=document.getElementById("hideAddEmployee");
    toDisplay.style.display="";
  }

  showDeleteEmployee(){
    var toDisplay=document.getElementById("hideDeleteEmployee");
    toDisplay.style.display="";
  }


  viewReports(){
    this.router.navigate(["viewReport"]);
  }

}