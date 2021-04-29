import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-user-signin',
  templateUrl: './user-signin.component.html',
  styleUrls: ['./user-signin.component.css']
})
export class UserSigninComponent implements OnInit {

  constructor(public userService:UserService, public router:Router) { }
  Msg?:String;
  ngOnInit(): void {
  }


  checkUser(userRef: any) {

    this.userService.getAllusers().subscribe(result=>{
      for(let i=0;i<result.length;i++){
          if(userRef.inputEmail==result[i].Email){
            let email = result[i].Email;
            if(result[i].Locked==true){
              this.Msg = "Account locked! Redirecting you to raise a ticket."
              sessionStorage.setItem('user',userRef.inputEmail);
              setTimeout(()=>{
                this.router.navigate(["UserTicket"])},3000);
            }else{
              if(userRef.inputPassword==result[i].Password){
                this.router.navigate(["UserHome"]);
             }else{
                this.Msg = "Here";
                this.userService.loginFail(userRef).subscribe((result1:String)=>{
                this.Msg = result1;
                this.userService.getUserByEmail(email).subscribe(res=>{
                    if(res[0].LoginAttempts==3){
                      this.userService.lockAccount(userRef).subscribe((result2:String)=>{
                        this.Msg = result2;
                        sessionStorage.setItem('user',userRef.inputEmail);
                        setTimeout(()=>{
                          this.router.navigate(["UserTicket"])},3000);
                      })
                    }
                })
              });
            }
            
          }
        }
      }
      })
  }
  ridirect() {
    console.log("Hello9") ;
  }




     getHelp(){
     var showNow=document.getElementById("hideToggleTicket");
     showNow.style.display="";
  }



}