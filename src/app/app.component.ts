import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <a routerLink="/events" routerLinkActive="active">Events</a><br>
    <router-outlet></router-outlet>
  `
})
export class AppComponent { }
