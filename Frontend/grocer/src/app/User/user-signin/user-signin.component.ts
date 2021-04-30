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
          if(userRef.inputEmail==result[i].Email){                          // First we check if the email used is present in the user collection if so we move forward in the code.
            let email = result[i].Email;                                    // Store the email id used in a variable email.
            if(result[i].Locked==true){                                     // Check if this particualr user is already locked out or not. 
              this.Msg = "Account locked! Redirecting you to raise a ticket." // if true then redirect to user request page. 
              sessionStorage.setItem('user',userRef.inputEmail);
              let tokenArray = new Uint32Array(1);
              crypto.getRandomValues(tokenArray);
              sessionStorage.setItem('token',tokenArray[0].toString());
              setTimeout(()=>{
                this.router.navigate(["UserTicket"])},3000);
            }else{
              if(userRef.inputPassword==result[i].Password){                   // check if the pasword use is right if so redirect to UserHome.
                let tokenArray = new Uint32Array(1);
                crypto.getRandomValues(tokenArray);
                sessionStorage.setItem('token',tokenArray[0].toString());
                sessionStorage.setItem("User",result[i].UserID.toString());
                this.router.navigate(["UserHome"]);
             }else{
                this.Msg = "Here";
                this.userService.loginFail(userRef).subscribe((result1:String)=>{            // else we increase the LoginCount of the user by 1 on the backend.
                this.Msg = result1;                                                         
                this.userService.getUserByEmail(email).subscribe(res=>{                      // Check if the LoginCount=3 if true set the Locked key of user to True and lock the user out and redirect them to the raise ticket page.
                    if(res[0].LoginAttempts==3){
                      this.userService.lockAccount(userRef).subscribe((result2:String)=>{
                        this.Msg = result2;
                        sessionStorage.setItem('user',userRef.inputEmail);
                        let tokenArray = new Uint32Array(1);
                        crypto.getRandomValues(tokenArray);
                        sessionStorage.setItem('token',tokenArray[0].toString());
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
}