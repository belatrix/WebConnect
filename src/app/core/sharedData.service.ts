import { Injectable } from '@angular/core';
import { Observable } from "rxjs";

import { LocalStorageService } from "./local-storage.service";
import { Employee } from "../shared/employee.model";
import { Category } from "../shared/category.model";
import { SubCategory } from "../shared/sub-category.model";

@Injectable()
export class SharedDataService {
  public sharedData = new SharedData();

  constructor(private localStorage: LocalStorageService) {}
}

export class SharedData {
  public title: string = '';
  public contactsPage: ContactsPage = new ContactsPage();
  public recommendationPage: RecommendationPage = new RecommendationPage();
  public categoriesPage: CategoriesPage = new CategoriesPage();
  public subCategoriesPage: SubCategoriesPage = new SubCategoriesPage();

  constructor() {}
}

export class ContactsPage {
  public selectedUser: Employee = null;
  public selectUser: boolean = false;
  
  constructor() {}
}

export class CategoriesPage {
  public selectedCategory: Category = null;
  public selectCategory: boolean = false;
  
  constructor() {}
}

export class SubCategoriesPage {
  public selectedSubCategory: SubCategory = null;
  public selectSubCategory: boolean = false;
  
  constructor() {}
}

export class RecommendationPage {
  public selectedUser: Employee = null;
  
  constructor() {}
}