import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-signin',
  templateUrl: './admin-signin.component.html',
  styleUrls: ['./admin-signin.component.css']
})
export class AdminSigninComponent implements OnInit {

  constructor(public router:Router) { }

  ngOnInit(): void {
  }

  login(loginRef:any){
    //console.log("Event generated");
    //console.log(loginRef)
    let user1 = loginRef.user;
    let pass1 = loginRef.pass;
    if(user1 == "Admin" && pass1 == "12345"){
      this.router.navigate(["AdminHome"]);
    }else{
      this.router.navigate(["AdminLogin"]);
    }
  }

}
