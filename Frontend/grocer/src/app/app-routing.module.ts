import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpPassChangeComponent } from './emp-pass-change/emp-pass-change.component';
import { EmpSendRequestComponent } from './emp-send-request/emp-send-request.component';
import { EmpSigninComponent } from './emp-signin/emp-signin.component';
import { MyAuthGuard } from './myauthguard';
import { NavComponent } from './nav/nav.component';

const routes: Routes = [
  {path:"EmpLogin",component:EmpSigninComponent},
  {path:"PassChange",component:EmpPassChangeComponent,canActivate:[MyAuthGuard]},
  {path:"EmpDashboard",component:NavComponent,canActivate:[MyAuthGuard],
  children:[
    {path:'SendRequest',component:EmpSendRequestComponent}
  ]

},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
