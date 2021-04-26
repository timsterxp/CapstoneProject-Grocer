import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpSigninComponent } from './Employee/emp-signin/emp-signin.component';
import { AdminSigninComponent } from './Admin/admin-signin/admin-signin.component';
import { UserSigninComponent } from './User/user-signin/user-signin.component';
import { UserSignupComponent } from './User/user-signup/user-signup.component';

const routes: Routes = [
  {path:"\EmpLogin",component:EmpSigninComponent},
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
