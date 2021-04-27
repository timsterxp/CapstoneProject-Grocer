import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpSigninComponent } from './Employee/emp-signin/emp-signin.component';
import { AdminSigninComponent } from './Admin/admin-signin/admin-signin.component';
import { UserSigninComponent } from './User/user-signin/user-signin.component';
import { UserSignupComponent } from './User/user-signup/user-signup.component';
import { MyAuthGuard } from './myauthguard';
import { EmpPasswordResetComponent } from './Employee/emp-password-reset/emp-password-reset.component';
import { NavComponent } from './nav/nav.component';
import { SendRequestComponent } from './Employee/send-request/send-request.component';

const routes: Routes = [
  {path:"EmpLogin",component:EmpSigninComponent},
  {path:"PassChange",component:EmpPasswordResetComponent,canActivate:[MyAuthGuard]},
  {path:"EmpDashboard",component:NavComponent,canActivate:[MyAuthGuard],
  children:[
    {path:'SendRequest',component:SendRequestComponent}
  ]

},
  {path:"\AdminLogin",component:AdminSigninComponent},
  {path:"\UserLogin",component:UserSigninComponent},
  
  
  // User Sign Up
  {path:"\UserSignUp",component: UserSignupComponent} ,

  // User Sign Up
  { path: "\login" ,  component : UserSigninComponent}


  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
