import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { FlashMessagesModule } from 'angular2-flash-messages';

// services imports
import { ValidateService } from './services/validate.service';
import { AuthService } from './services/auth.service';
import { AdminDashGuard } from './guards/dashboardAdmin.guard';
import { DataService } from './services/data.service';
import { MemberDashGuard } from './guards/dashboardMember.guard';
import { GuestDashGuard } from './guards/dashboardGuest.guard';


// routers imports
import { routing } from './routers/main_routers/app.routing';

// components imports
import { AppComponent } from './app.component';
import { WelcomePageComponent } from './welcome/welcome-page/welcome-page.component';
import { FooterComponent } from './footer/footer.component';
import { RegisterComponent } from './welcome/register/register.component';
import { LoginComponent } from './welcome/login/login.component';
import { HomeComponent } from './welcome/home/home.component';
import { AdminDashboardComponent } from './dashboards/admin-dashboard/admin-dashboard.component';
import { MemberDashboardComponent } from './dashboards/member-dashboard/member-dashboard.component';
import { GuestDashboardComponent } from './dashboards/guest-dashboard/guest-dashboard.component';
import { NavBarTopComponent } from './dashboards/shared/nav-bar-top/nav-bar-top.component';
import { SideBarComponent } from './dashboards/shared/side-bar/side-bar.component';


@NgModule({
  declarations: [
    AppComponent,
    WelcomePageComponent,
    FooterComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    AdminDashboardComponent,
    MemberDashboardComponent,
    GuestDashboardComponent,
    NavBarTopComponent,
    SideBarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    FlashMessagesModule
  ],
  providers: [
    ValidateService,
    AuthService,
    AdminDashGuard,
    DataService,
    MemberDashGuard,
    GuestDashGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
