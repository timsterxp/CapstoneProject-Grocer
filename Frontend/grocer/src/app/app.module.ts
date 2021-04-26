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
import { MyAuthGuard } from './myauthguard';
import { NavComponent } from './nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { EmpSendRequestComponent } from './emp-send-request/emp-send-request.component';

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
    NavComponent,
    EmpSendRequestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,MatButtonModule,MatInputModule,FormsModule,MatFormFieldModule,HttpClientModule, LayoutModule, MatToolbarModule, MatSidenavModule, MatIconModule, MatListModule, RouterModule, MatGridListModule, MatCardModule, MatMenuModule
  ],
  providers: [MyAuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
