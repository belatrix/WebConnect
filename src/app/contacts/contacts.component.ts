import { Component, OnInit } from '@angular/core';

import { LocalStorageService } from "../core/local-storage.service";
import { EmployeeService } from "../core/employee.service";
import { Employee } from "../shared/employee.model";
import { SharedDataService } from "../core/sharedData.service";
import { AppPage } from "../core/appPage";

@Component({
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent extends AppPage implements OnInit {

  employeeList: Employee[] = new Array<Employee>();
  isLoading: boolean = false;
  searchText: string = '';

  constructor(
    private localStorageService: LocalStorageService,
    private employeeService: EmployeeService,
    private sharedDataService: SharedDataService) {
      super('Contacts');
     }

  ngOnInit() {
    this.search();
  }

  search() {
    this.isLoading = true;
    let loggedUser = this.localStorageService.getItem('loggedUser');
    this.employeeService.getEmployeeList(this.searchText)
      .then(data => {
        this.employeeList = data.results;
        this.isLoading = false;
      })
      .catch(error => console.log("error"));
  }

}
