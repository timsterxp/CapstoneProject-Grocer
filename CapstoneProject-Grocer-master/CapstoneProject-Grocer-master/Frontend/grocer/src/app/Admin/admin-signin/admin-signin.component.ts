import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/admin.service';

@Component({
  selector: 'app-admin-signin',
  templateUrl: './admin-signin.component.html',
  styleUrls: ['./admin-signin.component.css']
})
export class AdminSigninComponent implements OnInit {

  constructor(public adminService:AdminService, public router:Router) { }
  Msg?:String;

  ngOnInit(): void {
  }

  adminLogin(adminRef1:any){
    this.adminService.retrieveAllAdmins().subscribe(result=>{
      let loginSuccess=false;
      
      for(let i =0;i<result.length;i++){
        if(adminRef1.id==result[i]._id && adminRef1.pass==result[i].password){
          loginSuccess=true;
          
          break;
        }
      }
      if(loginSuccess){
        console.log("Logged in Successfully!");
        let tokenArray = new Uint32Array(1);
          crypto.getRandomValues(tokenArray);
          sessionStorage.setItem('token',tokenArray[0].toString());
       this.router.navigate(["AdminHome"]);
        }
      else{
        this.Msg = "Invalid Credentials";
      }
  });

  }
}