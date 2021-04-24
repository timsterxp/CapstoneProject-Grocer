import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { UserSigninComponent } from './User/user-signin/user-signin.component';
import { UserHomeComponent } from './User/user-home/user-home.component';
import { EmpSigninComponent } from './Employee/emp-signin/emp-signin.component';
import { AdminSigninComponent } from './Admin/admin-signin/admin-signin.component';
import { EmpHomeComponent } from './Employee/emp-home/emp-home.component';
import { AdminHomeComponent } from './Admin/admin-home/admin-home.component';
import { UserSignupComponent } from './User/user-signup/user-signup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { RaiseTicketComponent } from './User/raise-ticket/raise-ticket.component';

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
    UserSignupComponent,
    RaiseTicketComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,MatButtonModule,MatInputModule,FormsModule,MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
