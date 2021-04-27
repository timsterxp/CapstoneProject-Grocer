import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpSigninComponent } from './Employee/emp-signin/emp-signin.component';
import { AdminSigninComponent } from './Admin/admin-signin/admin-signin.component';
import { UserSigninComponent } from './User/user-signin/user-signin.component';
import { AdminHomeComponent } from './Admin/admin-home/admin-home.component';
import {AddItemComponent} from './Admin/add-item/add-item.component';
import {DeleteItemComponent} from './Admin/delete-item/delete-item.component'
import {UpdateItemComponent} from './Admin/update-item/update-item.component'

const routes: Routes = [
  {path:"\EmpLogin",component:EmpSigninComponent},
  {path:"\AdminLogin",component:AdminSigninComponent},
  {path:"\AddItem",component:AddItemComponent},
  {path:"\DeleteItem",component:DeleteItemComponent},
  {path:"\UpdateItem",component:UpdateItemComponent},
  {path:"\AdminHome",component:AdminHomeComponent},
  {path:"\UserLogin",component:UserSigninComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
