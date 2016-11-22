import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { AppPage } from "../core/appPage";
import { SharedDataService } from "../core/sharedData.service";
import { Employee } from "../shared/employee.model";

@Component({
  templateUrl: './recommendation.component.html',
  styleUrls: ['./recommendation.component.css']
})
export class RecommendationComponent extends AppPage implements OnInit {

  private selectedUser: Employee;
  
  constructor(private router: Router, private sharedDataService: SharedDataService) {
    super('Give a recommendation');
   }

  ngOnInit() {
    if (this.sharedDataService.sharedData.recommendationPage.selectedUser) {
      this.selectedUser = this.sharedDataService.sharedData.recommendationPage.selectedUser;
      this.sharedDataService.sharedData.recommendationPage.selectedUser = null;
    }
    else if (this.sharedDataService.sharedData.contactsPage.selectedUser) {
      this.selectedUser = this.sharedDataService.sharedData.contactsPage.selectedUser;
      this.sharedDataService.sharedData.contactsPage.selectedUser = null;
    }
  }

  selectUser() {
    this.sharedDataService.sharedData.contactsPage.selectUser = true;
    this.router.navigate(['/contacts']);
  }

}
