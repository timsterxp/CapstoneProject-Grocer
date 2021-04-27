import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-signin',
  templateUrl: './user-signin.component.html',
  styleUrls: ['./user-signin.component.css']
})
export class UserSigninComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  checkUser(userRef: any) {

  
    // Values from Login Form
    //  console.log(userRef.inputEmail) ;
    //  console.log(userRef.inputPassword) ;
     

  }
  ridirect() {
    console.log("Hello9") ;
  }




     getHelp(){
     var showNow=document.getElementById("hideToggleTicket");
     showNow.style.display="";
  }



}