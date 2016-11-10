import { Component, OnInit } from '@angular/core';

import { LocalStorageService } from "../core/local-storage.service";
import { EmployeeService } from "../core/employee.service";
import { Employee } from "../shared/employee.model";

@Component({
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  title: string = 'Contacts';
  employeeList: Employee[] = new Array<Employee>();
  isLoading: boolean = false;
  searchText: string = '';

  constructor(
    private localStorageService: LocalStorageService,
    private employeeService: EmployeeService) { }

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
