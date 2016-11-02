import {Injectable} from "@angular/core";
import {CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";
import {AuthenticationService} from "./authentication.service";

@Injectable()
export class AuthenticationGuard implements CanActivate {

  constructor(private user: AuthenticationService, private router: Router) {}

  // The ActivatedRouteSnapshot contains the future route that will be activated
  // and the RouterStateSnapshot contains the future RouterState of our application,
  // should we pass through our guard check.
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let url: string = state.url;
    return this.checkLogin(url);
  }

  checkLogin(url: string): boolean {
    if (this.user.isLoggedIn()) {
      return true;
    }

    // Store the attempted URL for redirecting
    this.user.redirectUrl = url;

    // Navigate to the login page with extras
    this.router.navigate(['/login']);
    return false;
  }

  /*canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
   return this.canActivate(route, state);
   }*/
}
