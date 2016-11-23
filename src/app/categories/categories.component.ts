import { Component, OnInit } from '@angular/core';

import { LocalStorageService } from "../core/local-storage.service";
import { CategoryService } from "../core/category.service";
import { Category } from "../shared/category.model";
import { AppPage } from "../core/appPage";
import { SharedDataService } from "../core/sharedData.service";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent extends AppPage implements OnInit {

  categoryList: Category[] = new Array<Category>();
  isLoading: boolean = false;

  constructor(
    private localStorageService: LocalStorageService,
    private categoryService: CategoryService,
    private sharedDataService: SharedDataService) {
    super('Categories');
   }

  ngOnInit() {
    this.search();
  }

  search() {
    this.isLoading = true;
    let loggedUser = this.localStorageService.getItem('loggedUser');
    this.categoryService.getAllCategories()
      .then(data => {
        this.categoryList = data;
        this.isLoading = false;
      })
      .catch(error => console.log("error"));
  }

  onCategoryClick(category: Category) {
    this.sharedDataService.sharedData.categoriesPage.selectedCategory = category;
    window.history.back();
    return;
  }

}
