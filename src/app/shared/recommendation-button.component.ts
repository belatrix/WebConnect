import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-recommendation-button',
  template: `
    <button md-fab (click)="navigateTo()" color="primary">
      <md-icon class="md-24">add</md-icon>
    </button>
  `,
  styleUrls: ['recommendation-button.component.css']
})
export class RecommendationButtonComponent implements OnInit {

  constructor(private router: Router) { }

  navigateTo() {
    this.router.navigate(['../../recommendation']);
  }

  ngOnInit() {
  }

}
