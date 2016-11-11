import { Component, OnInit } from '@angular/core';

import { AuthenticationService } from "../core/authentication.service";
import { AppPage } from "../core/appPage";

@Component({
  selector: 'app-home',
  template: `
  <app-tab-group></app-tab-group>
  <router-outlet></router-outlet>
  `
})
export class HomeComponent extends AppPage implements OnInit {

  constructor(private authenticationService: AuthenticationService) {
    super('Belatrix Connect');
   }

  logOut() {
    this.authenticationService.logOut();
  }

  ngOnInit() {
  }

}
