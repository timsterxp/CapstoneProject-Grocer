import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpSigninComponent } from './Employee/emp-signin/emp-signin.component';
import { AdminSigninComponent } from './Admin/admin-signin/admin-signin.component';
import { UserSigninComponent } from './User/user-signin/user-signin.component';
import { SendRequestComponent } from './Employee/send-request/send-request.component';
import { UpdateOrderComponent } from './Employee/update-order/update-order.component';
import { UnlockUserComponent } from './Employee/unlock-user/unlock-user.component';
import { EditProfileComponent } from './Employee/edit-profile/edit-profile.component';

const routes: Routes = [
  { path:"\EmpLogin",component:EmpSigninComponent},
  { path:"\AdminLogin",component:AdminSigninComponent},
  { path: "\UserLogin", component: UserSigninComponent },
  { path: "\EmpReq", component: SendRequestComponent },
  { path: "\EmpUpdate", component: UpdateOrderComponent },
  { path: "\EmpUnlock", component: UnlockUserComponent },
  { path: "\EmpEdit", component: EditProfileComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
