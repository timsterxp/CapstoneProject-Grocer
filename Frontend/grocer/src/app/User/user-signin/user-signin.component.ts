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

  signUp(){
    var showNow=document.getElementById("hideSignUp");
    showNow.style.display="";
  }

  getHelp(){
    var showNow=document.getElementById("hideToggle");
    showNow.style.display="";
  }
}
