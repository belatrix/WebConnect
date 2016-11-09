import { Component } from '@angular/core';
import { AuthenticationService } from "./core/authentication.service";

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  templateUrl: './app.component.html'
})
export class AppComponent {

  constructor(private authenticationService: AuthenticationService) { }

  logOut() {
    this.authenticationService.logOut();
  }
}
