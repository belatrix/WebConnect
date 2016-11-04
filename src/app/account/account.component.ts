import { Component, OnInit, OnDestroy } from '@angular/core';

import { LocalStorageService } from "../core/local-storage.service";
import { EmployeeService } from "../core/employee.service";
import {Employee} from "../shared/employee.model";
import {Subscription} from "rxjs";

@Component({
  templateUrl: 'account.component.html',
  styleUrls: ['account.component.css']
})
export class AccountComponent implements OnInit, OnDestroy {
  /*employeeDetails: Employee = new Employee(0, "", "", "", "",
    {
      "id": 0,
      "name": "",
      "icon": ""
    },
    "",
    "",
    false,
    false,
    0,
    0,
    0,
    0,
    0,
    0,
    false,
    false,
    "",
    0
  );*/

  employeeDetails: Employee = new Employee();
  subscription: Subscription;
  isLoading: boolean = true;

  constructor(
    private localStorageService: LocalStorageService,
    private employeeService: EmployeeService) { }

  ngOnInit() {
    let loggedUser = this.localStorageService.getItem('loggedUser');
    this.subscription = this.employeeService.getEmployeeDetails(loggedUser.user_id)
      .subscribe(
        data => this.employeeDetails = data,
        error => console.log(error),
        () => this.isLoading = false
      );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
