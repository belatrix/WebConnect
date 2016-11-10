import { Component, OnInit } from '@angular/core';

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

  constructor(
    private localStorageService: LocalStorageService,
    private employeeService: EmployeeService) { }

  ngOnInit() {
    let loggedUser = this.localStorageService.getItem('loggedUser');
    let employeeDetailsP = this.employeeService.getEmployeeDetails(loggedUser.user_id);
    let employeestarListP = this.employeeService.getEmployeeStarList(loggedUser.user_id);

    Promise.all([employeeDetailsP, employeestarListP])
      .then(values => {
        console.log(values);
        this.employeeDetails = values[0];
        this.employeeStarList = values[1].results;
        this.isLoading = false;
      })
      .catch(error => console.log("error"));
  }
}
