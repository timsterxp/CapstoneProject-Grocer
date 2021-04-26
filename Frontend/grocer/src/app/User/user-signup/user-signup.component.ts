import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-signup',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.css']
})
export class UserSignupComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  storeUser(userRef:any) {

    // Values received from the form 

    // console.log(userRef.firstName) ;
    // console.log(userRef.lastName) ;
    // console.log(userRef.email) ;
    // console.log(userRef.dob) ;
    // console.log(userRef.address) ;
    // console.log(userRef.address2) ;
    // console.log(userRef.country) ;
    // console.log(userRef.state) ;
    // console.log(userRef.zip) ;
    // console.log(userRef.ccname) ;
    // console.log(userRef.ccnumber) ;
    // console.log(userRef.cccvv) ;
    // console.log(userRef.ccexpiration) ;


  }

}

