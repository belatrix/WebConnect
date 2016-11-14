import { Component, OnInit } from '@angular/core';

import { AuthenticationService } from "../core/authentication.service";
import { AppPage } from "../core/appPage";

@Component({
  selector: 'app-home',
  template: `
    <app-tab-group></app-tab-group>
    <div class="container">
      <router-outlet></router-outlet>
    </div>
  `,
  styles:[`
    .container{
      width:980px;
      margin-left: auto;
      margin-right: auto;
    }
  `
  ]
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
