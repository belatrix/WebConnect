import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { AppPage } from "../core/appPage";
import { SharedDataService } from "../core/sharedData.service";
import { Employee } from "../shared/employee.model";
import { Category } from "../shared/category.model";
import { SubCategory } from "../shared/sub-category.model";

@Component({
  templateUrl: './recommendation.component.html',
  styleUrls: ['./recommendation.component.css']
})
export class RecommendationComponent extends AppPage implements OnInit {

  private selectedUser: Employee;
  private selectedCategory: Category;
  private selectedSubCategory: SubCategory;
  private comment: string = '';
  
  constructor(private router: Router, private sharedDataService: SharedDataService) {
    super('Give a recommendation');
   }

  ngOnInit() {
    if (this.sharedDataService.sharedData.recommendationPage.selectedUser) {
      this.selectedUser = this.sharedDataService.sharedData.recommendationPage.selectedUser;
    }
    else if (this.sharedDataService.sharedData.contactsPage.selectedUser) {
      this.selectedUser = this.sharedDataService.sharedData.contactsPage.selectedUser;
      this.sharedDataService.sharedData.contactsPage.selectedUser = null;
    }

    if (this.sharedDataService.sharedData.categoriesPage.selectedCategory) {
      this.selectedCategory = this.sharedDataService.sharedData.categoriesPage.selectedCategory;
      this.sharedDataService.sharedData.categoriesPage.selectedCategory = null;
    }

    if (this.sharedDataService.sharedData.subCategoriesPage.selectedSubCategory) {
      this.selectedSubCategory = this.sharedDataService.sharedData.subCategoriesPage.selectedSubCategory;
      this.sharedDataService.sharedData.subCategoriesPage.selectedSubCategory = null;
    }
  }

  selectUser() {
    this.sharedDataService.sharedData.contactsPage.selectUser = true;
    this.router.navigate(['/contacts']);
  }

  selectCategory() {
    this.sharedDataService.sharedData.categoriesPage.selectCategory = true;
    this.router.navigate(['/categories']);
  }

  saveClick() {
    
  }

}
