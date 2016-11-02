import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-recommendation-button',
  template: `
    <span class="position">
      <button (click)="navigateTo()">+</button>
    </span>  
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
