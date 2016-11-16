import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { LocalStorageService } from "../core/local-storage.service";

import { Employee } from "../shared/employee.model";
import { EmployeeService } from "../core/employee.service";

@Component({
  selector: 'app-edit-account',
  templateUrl: './edit-account.component.html',
  styleUrls: ['./edit-account.component.css']
})
export class EditAccountComponent implements OnInit {
  editAccountForm: FormGroup;
  employeeDetails: Employee;
  isLoading: boolean = true;

  constructor(
    private fb: FormBuilder,
    private employeeService: EmployeeService,
    private localStorageService: LocalStorageService
  ) { }

  ngOnInit() {
    let employee = this.localStorageService.getItem('loggedUser');
    let employeeDetailsP = this.employeeService.getEmployeeDetails(employee.user_id);

    Promise.all([employeeDetailsP])
      .then(values => {
        console.log(values);
        this.employeeDetails = values[0];
        this.isLoading = false;
        this.initForm();
      })
      .catch(error => console.log("error"));
  }

  initForm() {
    this.editAccountForm = this.fb.group({
      firstname: [this.employeeDetails.first_name, Validators.required],
      lastname : [this.employeeDetails.last_name, Validators.required],
      skypeid  : [this.employeeDetails.skype_id, Validators.required]
    });
  }

  submitForm() {

  }
}
