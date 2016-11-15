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

  constructor(
    private localStorageService: LocalStorageService,
    private router: Router,
    private route: ActivatedRoute,
    private employeeService: EmployeeService) { }

  ngOnInit() {
    let userPK;
    if(this.route.snapshot.params['id'] !== undefined) {
      userPK = this.route.snapshot.params['id'];
    } else {
      userPK = this.localStorageService.getItem('loggedUser').user_id
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
}
