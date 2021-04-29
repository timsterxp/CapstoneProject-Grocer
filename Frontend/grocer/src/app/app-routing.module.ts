import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpSigninComponent } from './Employee/emp-signin/emp-signin.component';
import { AdminSigninComponent } from './Admin/admin-signin/admin-signin.component';
import { UserSigninComponent } from './User/user-signin/user-signin.component';
import { UserSignupComponent } from './User/user-signup/user-signup.component';
import { CheckoutComponent } from './User/checkout/checkout.component';
import { UserEditProfileComponent } from './User/user-edit-profile/user-edit-profile.component';
import { OrderStatusComponent } from './User/order-status/order-status.component';
import { MyAuthGuard } from './myauthguard';
import { EmpPasswordResetComponent } from './Employee/emp-password-reset/emp-password-reset.component';
import { NavComponent } from './nav/nav.component';
import { SendRequestComponent } from './Employee/send-request/send-request.component';
import { HomePageComponent } from './home-page/home-page.component';
import { UserHomeComponent } from './User/user-home/user-home.component';
import {AddItemComponent} from './Admin/add-item/add-item.component';
import {DeleteItemComponent} from './Admin/delete-item/delete-item.component';
import {UpdateItemComponent} from './Admin/update-item/update-item.component';
import { AddEmployeeComponent } from './Admin/add-employee/add-employee.component';
import { EmpUpdateOrderStatusComponent } from './Employee/emp-update-order-status/emp-update-order-status.component';
import { EditProfileComponent } from './Employee/edit-profile/edit-profile.component';
import { DeleteEmployeeComponent } from './Admin/delete-employee/delete-employee.component';

import { UnlockUserComponent } from './Employee/unlock-user/unlock-user.component';
import { AdminHomeComponent } from './Admin/admin-home/admin-home.component';


const routes: Routes = [
  {path:"",component:HomePageComponent},
  {path:"EmpLogin",component:EmpSigninComponent},
  {path:"PassChange",component:EmpPasswordResetComponent,canActivate:[MyAuthGuard]},
  {path:"EmpDashboard",component:NavComponent,
  children:[
    {path:'SendRequest',component:SendRequestComponent},
    {path:'UpdateOrderStatus',component:EmpUpdateOrderStatusComponent},
    {path:'EditProfile',component:EditProfileComponent},
    {path:'UnlockUser',component:UnlockUserComponent}
  ]

},
  {path:"\AdminLogin",component:AdminSigninComponent},
  {path:"\AdminHome",component:AdminHomeComponent},
  {path:"\UserLogin",component:UserSigninComponent},
  
  
  // User Sign Up
  {path:"\UserSignUp",component: UserSignupComponent} ,
  {path:"\UserHome",component:UserHomeComponent},

  // User Sign Up
  {path:"\AddItem",component:AddItemComponent},
  {path:"\DeleteItem",component:DeleteItemComponent},
  { path: "\UpdateItem", component: UpdateItemComponent },
  { path: "\UserCheckout", component: CheckoutComponent },
  { path: "\UserEditProfile", component: UserEditProfileComponent },
  { path: "\OrderStatus", component: OrderStatusComponent },

  {path:"\AdminAddEmployee",component:AddEmployeeComponent},
  {path:"\AdminDeleteEmployee",component:DeleteEmployeeComponent}


  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
