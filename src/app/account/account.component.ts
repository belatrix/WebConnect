import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { LocalStorageService } from "../core/local-storage.service";
import { EmployeeService } from "../core/employee.service";
import { Employee } from "../shared/employee.model";
import { CategoryService } from "../core/category.service";

@Component({
  templateUrl: 'account.component.html',
  styleUrls: ['account.component.css']
})
export class AccountComponent implements OnInit {
  employeeDetails: Employee = new Employee();
  employeeStarList;
  categoryList;
  isLoading: boolean = true;
  isCurrentUser: boolean;

  constructor(
    private localStorageService: LocalStorageService,
    private router: Router,
    private route: ActivatedRoute,
    private categoryService: CategoryService,
    private employeeService: EmployeeService) { }

  ngOnInit() {
    let userPK;
    //this.isCurrentUser = this.route.snapshot.params['id'] !== undefined;
    this.isCurrentUser = this.route.snapshot.url[0].path ? this.route.snapshot.url[0].path.toLowerCase().trim() == "account" : false;

    if(this.isCurrentUser) {
      userPK = this.localStorageService.getItem('loggedUser').user_id
    } else {
      userPK = this.route.snapshot.params['id'];
    }
    let employeeDetailsP = this.employeeService.getEmployeeDetails(userPK);
    let employeestarListP = this.employeeService.getEmployeeStarList(userPK);
    let categoryListP = this.categoryService.getAllCategories();

    Promise.all([employeeDetailsP, employeestarListP, categoryListP])
      .then(values => {
        this.employeeDetails = values[0];
        this.employeeStarList = values[1].results;
        this.categoryList = values[2];
        this.isLoading = false;
        this.formatSubCategory();
      })
      .catch((error) => {
        console.log(error);
        console.log("error");
      });
  }

  loadEditProfile(pk: number) {
    this.router.navigateByUrl('/home/account/edit');
  }

  formatSubCategory(){
    for (var i = 0; i < this.employeeStarList.length; ++i) {
      this.employeeStarList[i].subCategoryName = this.getCategoryName(this.employeeStarList[i].category, this.employeeStarList[i].subcategory);
    }
  }

  // TODO
  // refactor this loop with ES5 array functions
  getCategoryName(category, subCategory){
    let subcategoryName = "default";
    for (var i = 0; i < this.categoryList.length; i++) {
      if (this.categoryList[i].pk == category) {
        for (var j = 0; j < this.categoryList[i].subcategories.length; j++) {
          if(this.categoryList[i].subcategories[j].pk == subCategory) {
            subcategoryName = this.categoryList[i].subcategories[j].name;
            break;
          }
        }
        break;
      }
    }
    return subcategoryName;
  }


}
