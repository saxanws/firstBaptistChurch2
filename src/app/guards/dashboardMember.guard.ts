/**
 * Created by saxan on 6/17/2017.
 * This class is the guard to determine if the user type can navigate the member dashboard.
 */

import {Injectable} from '@angular/core';
import {Router, CanActivate} from '@angular/router';
import { AuthService } from '../services/auth.service';


@Injectable()
export class MemberDashGuard implements CanActivate{

  constructor(private authService: AuthService, private router: Router){}

  canActivate(){
    // this is checking if the user is a member type by calling the profile witht the token.
    return this.authService.getProfile().map((auth) => {
      if (auth.user.status == "member" && this.authService.loggedIn()) {
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

