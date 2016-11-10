import { Component } from '@angular/core';

import { AuthenticationService } from "./core/authentication.service";
import { SharedDataService } from "./core/sharedData.service";

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  templateUrl: './app.component.html'
})
export class AppComponent {

  constructor(private authenticationService: AuthenticationService, private sharedDataService: SharedDataService) { }

  logOut() {
    this.authenticationService.logOut();
  }

  isLoggedIn() {
    return this.authenticationService.isLoggedIn();
  }

  title() {
    return this.sharedDataService.sharedData.title;
  }

}
