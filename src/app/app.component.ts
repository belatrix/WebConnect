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
  showToolBar: boolean = false;
  showSideBar: boolean = false;

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
    this.title = 'Belatrix Connect';
    this.showToolBar = true;
    if (component instanceof AppPage) {
      let appPage: AppPage = component;
      this.title = appPage.title;
      if (appPage.isPublicPage) {
        this.showToolBar = false;
      }
    }
  }

  onMenuClick() {
    this.showSideBar = !this.showSideBar;
  }

}
