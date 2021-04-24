import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpSigninComponent } from './emp-signin/emp-signin.component';

const routes: Routes = [
  {path:"\EmpLogin",component:EmpSigninComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
