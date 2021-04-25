import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { UserSigninComponent } from './user-signin/user-signin.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { EmpSigninComponent } from './emp-signin/emp-signin.component';
import { AdminSigninComponent } from './admin-signin/admin-signin.component';
import { EmpHomeComponent } from './emp-home/emp-home.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {HttpClientModule} from '@angular/common/http';
import { EmpPassChangeComponent } from './emp-pass-change/emp-pass-change.component';
import { EmpDashboardComponent } from './emp-dashboard/emp-dashboard.component';
import { MyAuthGuard } from './myauthguard';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    UserSigninComponent,
    UserHomeComponent,
    EmpSigninComponent,
    AdminSigninComponent,
    EmpHomeComponent,
    AdminHomeComponent,
    EmpPassChangeComponent,
    EmpDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,MatButtonModule,MatInputModule,FormsModule,MatFormFieldModule,HttpClientModule
  ],
  providers: [MyAuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
