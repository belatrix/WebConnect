import { Component } from '@angular/core';

import { AuthenticationService } from "./core/authentication.service";
import { SharedDataService } from "./core/sharedData.service";
import { AppPage } from "./core/appPage";

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  templateUrl: './app.component.html'
})
export class AppComponent {

  title: string = '';

  constructor(
    private authenticationService: AuthenticationService,
    private sharedDataService: SharedDataService) {}

  logOut() {
    this.authenticationService.logOut();
  }

  isLoggedIn() {
    return this.authenticationService.isLoggedIn();
  }

  onRouterOutletActivate(component) {
    if (component instanceof AppPage) {
      let appPage: AppPage = component;
      this.title = appPage.title;
    }
    else {
      this.title = 'Belatrix Connect';
    }
  }

}
