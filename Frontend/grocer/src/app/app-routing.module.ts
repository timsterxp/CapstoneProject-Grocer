import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpDashboardComponent } from './emp-dashboard/emp-dashboard.component';
import { EmpPassChangeComponent } from './emp-pass-change/emp-pass-change.component';
import { EmpSigninComponent } from './emp-signin/emp-signin.component';
import { MyAuthGuard } from './myauthguard';

const routes: Routes = [
  {path:"\EmpLogin",component:EmpSigninComponent},
  {path:"\PassChange",component:EmpPassChangeComponent,canActivate:[MyAuthGuard]},
  {path:"\EmpDashboard",component:EmpDashboardComponent,canActivate:[MyAuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
