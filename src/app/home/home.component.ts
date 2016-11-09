import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../core/authentication.service";

@Component({
  selector: 'app-home',
  template: `
  <app-tab-group></app-tab-group>
  <router-outlet></router-outlet>
  `
})
export class HomeComponent implements OnInit {

  constructor(private authenticationService: AuthenticationService) { }

  logOut() {
    this.authenticationService.logOut();
  }

  ngOnInit() {
  }

}
