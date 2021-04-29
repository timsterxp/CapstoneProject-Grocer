import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-signup',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.css']
})
export class UserSignupComponent implements OnInit {

  constructor(public userser : UserService, public router:Router) { }
  
   msg : string ; 
  ngOnInit(): void {
  }

  storeUser(userRef:any) {

    // Values received from the form 
   
    // console.log(userRef.firstName) ;
    // console.log(userRef.lastName) ;
    // console.log(userRef.email) ;
    // console.log(userRef.dob) ;
    // console.log(userRef.address) ;
    // console.log(userRef.phnumber) ;
    
  

    // console.log(userRef.country) ;

    // console.log(userRef.state) ;
   
  this.userser.storeUserDetails(userRef).subscribe(result=> {
  this.msg = result ;
  alert("SignUp Successfull ! Welcome to Grocers") ;
  this.router.navigate(["UserLogin"]);
  
  }, err => { console.log (err) }) ;

  }


}

