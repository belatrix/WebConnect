import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { LocalStorageService } from "../core/local-storage.service";
import { CategoryService } from "../core/category.service";
import { SubCategory } from "../shared/sub-category.model";
import { AppPage } from "../core/appPage";
import { SharedDataService } from "../core/sharedData.service";

@Component({
  selector: 'app-sub-categories',
  templateUrl: './sub-categories.component.html',
  styleUrls: ['./sub-categories.component.css']
})
export class SubCategoriesComponent extends AppPage implements OnInit {

  subCategoryList: SubCategory[] = new Array<SubCategory>();
  isLoading: boolean = false;

  constructor(
    private localStorageService: LocalStorageService,
    private categoryService: CategoryService,
    private sharedDataService: SharedDataService,
    private route: ActivatedRoute,
    private router: Router) {
    super('Sub Categories');
   }

  ngOnInit() {
    this.search();
  }

  search() {
    this.isLoading = true;
    let loggedUser = this.localStorageService.getItem('loggedUser');
    this.categoryService.getCategorySubCategories(+this.route.snapshot.params['categoryId'])
      .then(data => {
        this.subCategoryList = data;
        this.isLoading = false;
      })
      .catch(error => console.log("error"));
  }

  onSubCategoryClick(subCategory: SubCategory) {
    this.sharedDataService.sharedData.subCategoriesPage.selectedSubCategory = subCategory;
    this.router.navigate(['/recommendation']);
  }

}
