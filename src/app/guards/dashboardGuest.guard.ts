/**
 * Created by saxan on 6/17/2017.
 * This class is the guard to determine if the user type can navigate the guest dashboard.
 */

import {Injectable} from '@angular/core';
import {Router, CanActivate} from '@angular/router';
import { AuthService } from '../services/auth.service';


@Injectable()
export class GuestDashGuard implements CanActivate{

  constructor(private authService: AuthService, private router: Router){}

  canActivate(){
    // this is checking if the user is a guest type by calling the profile with the token.
    return this.authService.getProfile().map((auth) => {
      if (auth.user.status == "guest" && this.authService.loggedIn()) {
        this.authService.user = auth.user;
        console.log();
        return true;
      }else {
        this.router.navigateByUrl('welcome/login');
        this.authService.logout();
        return false;
      }
    });
  }
}

