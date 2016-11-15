import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { LocalStorageService } from "../core/local-storage.service";
import { EmployeeService } from "../core/employee.service";
import { Employee } from "../shared/employee.model";

@Component({
  templateUrl: 'account.component.html',
  styleUrls: ['account.component.css']
})
export class AccountComponent implements OnInit {
  employeeDetails: Employee = new Employee();
  employeeStarList;
  isLoading: boolean = true;
  isCurrentUser: boolean;

  constructor(
    private localStorageService: LocalStorageService,
    private router: Router,
    private route: ActivatedRoute,
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

    Promise.all([employeeDetailsP, employeestarListP])
      .then(values => {
        console.log(values);
        this.employeeDetails = values[0];
        this.employeeStarList = values[1].results;
        this.isLoading = false;
      })
      .catch(error => console.log("error"));
  }

  loadEditProfile(pk: number) {
    console.log(pk);
    this.router.navigateByUrl('/home/account/edit/');
  }
}
