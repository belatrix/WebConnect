import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import { Router } from "@angular/router";
import {Observable} from "rxjs";

import {User} from "../shared/user.model";
import {LocalStorageService} from "./local-storage.service";

@Injectable()
export class AuthenticationService {
  redirectUrl: string;
  private loggedIn: boolean = false;
  private url: string = 'http://belatrix-connect.herokuapp.com:80/api/';

  constructor(
    private http: Http,
    private localStorageService: LocalStorageService,
    private router: Router
  ) {
    let loggedUser = this.localStorageService.getItem('loggedUser');
    this.loggedIn = !!loggedUser;
  }

  logIn(userCred): Observable<User> {
    let credentials = 'username=' + userCred.username + '&password=' + userCred.password;
    let headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
    let options = new RequestOptions({headers: headers});

    return this.http.post(this.url + 'employee/authenticate/', credentials, options)
      .map((res: Response) => res.json())
      .map((res) => {
        if (res) {
          this.localStorageService.setItem(
            'loggedUser',
            JSON.stringify(
              new User(
                res.user_id,
                userCred.username,
                res.token,
                res.is_base_profile_complete,
                res.is_password_reset_required,
                res.is_staff,
                res.reset_password_code)
            )
          );
          this.loggedIn = true;
        }
        return res;
      })
      .catch((error: any) => Observable.throw(error.json().error || 'Server Error')
      );
  }

  logOut() {
    /*let loggedUser = this.localStorageService.getItem('loggedUser');
    let headers = new Headers({'Authorization': 'Token ' + loggedUser.token});
    let options = new RequestOptions({headers: headers});

    this.http.get(this.url + 'employee/logout/', options)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server Error')
      );*/
    this.localStorageService.removeItem('loggedUser');
    this.loggedIn = false;
    this.router.navigate(['/login']);
  }

  isLoggedIn() {
    return this.loggedIn;
  }
}

