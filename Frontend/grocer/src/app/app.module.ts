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
import { AddItemComponent } from './Admin/add-item/add-item.component';
import { DeleteItemComponent } from './Admin/delete-item/delete-item.component';
import { UpdateItemComponent } from './Admin/update-item/update-item.component';
import { ViewRequestComponent } from './Admin/view-request/view-request.component';
import { AddEmployeeComponent } from './Admin/add-employee/add-employee.component';
import { DeleteEmployeeComponent } from './Admin/delete-employee/delete-employee.component';
import { GenerateReportsComponent } from './Admin/generate-reports/generate-reports.component';
import { SendRequestComponent } from './Employee/send-request/send-request.component';
import { UpdateOrderComponent } from './Employee/update-order/update-order.component';
import { UnlockUserComponent } from './Employee/unlock-user/unlock-user.component';
import { EditProfileComponent } from './Employee/edit-profile/edit-profile.component';
import { SelectItemComponent } from './User/select-item/select-item.component';
import { ViewItemComponent } from './User/view-item/view-item.component';
import { CheckoutComponent } from './User/checkout/checkout.component';
import { OrderStatusComponent } from './User/order-status/order-status.component';
import { FundsComponent } from './User/funds/funds.component';

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
    RaiseTicketComponent,
    AddItemComponent,
    DeleteItemComponent,
    UpdateItemComponent,
    ViewRequestComponent,
    AddEmployeeComponent,
    DeleteEmployeeComponent,
    GenerateReportsComponent,
    SendRequestComponent,
    UpdateOrderComponent,
    UnlockUserComponent,
    EditProfileComponent,
    SelectItemComponent,
    ViewItemComponent,
    CheckoutComponent,
    OrderStatusComponent,
    FundsComponent
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
