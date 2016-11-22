import { Component, OnInit, Input } from '@angular/core';
import {Router} from "@angular/router";

import { Employee } from "./employee.model";
import { SharedDataService } from "../core/sharedData.service";

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
  
  @Input()
  employee: Employee;

  constructor(private router: Router, private sharedDataService: SharedDataService) { }

  navigateTo() {
    if (this.employee) {
      this.sharedDataService.sharedData.recommendationPage.selectedUser = this.employee;
    }
    this.router.navigate(['../../recommendation']);
  }

  ngOnInit() {
  }

}
