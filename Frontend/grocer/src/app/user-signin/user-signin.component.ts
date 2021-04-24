import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-signin',
  templateUrl: './user-signin.component.html',
  styleUrls: ['./user-signin.component.css']
})
export class UserSigninComponent implements OnInit {

  constructor(public router:Router) { }

  ngOnInit(): void {
  }

  signUp(){
    this.router.navigate(["signup"]);
  }

}
