import { Component, OnInit } from '@angular/core';

import { LocalStorageService } from "../core/local-storage.service";
import { EmployeeService } from "../core/employee.service";
import {Employee} from "../shared/employee.model";

@Component({
  templateUrl: 'account.component.html',
  styleUrls: ['account.component.css']
})
export class AccountComponent implements OnInit {
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

  constructor(
    private localStorageService: LocalStorageService,
    private employeeService: EmployeeService) { }

  ngOnInit() {
    let loggedUser = this.localStorageService.getItem('loggedUser');
    this.employeeService.getEmployeeDetails(loggedUser.user_id)
      .subscribe(
        data => this.employeeDetails = data,
        error => console.log(error)
      );
  }

}
