import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { LocalStorageService } from "../core/local-storage.service";
import { Router } from '@angular/router';

import { Employee } from "../shared/employee.model";
import { EmployeeService } from "../core/employee.service";
//import { FileUploader } from 'ng2-file-upload';

@Component({
  selector: 'app-edit-account',
  templateUrl: './edit-account.component.html',
  styleUrls: ['./edit-account.component.css']
})
export class EditAccountComponent implements OnInit {
  editAccountForm: FormGroup;
  employeeDetails: Employee;
  isLoading: boolean = true;

  private zone: NgZone;
  private basicOptions: Object;
  private progress: number = 0;
  private response: any = {};

  uploadFile: any;

  constructor(
    private fb: FormBuilder,
    private employeeService: EmployeeService,
    private localStorageService: LocalStorageService,
    private router: Router
  ) { }

  public url;
  //public uploader:FileUploader = new FileUploader({url: this.url});
  public hasBaseDropZoneOver:boolean = false;
  public hasAnotherDropZoneOver:boolean = false;

  public fileOverBase(e:any):void {
    this.hasBaseDropZoneOver = e;
  }

  public fileOverAnother(e:any):void {
    this.hasAnotherDropZoneOver = e;
  }

  ngOnInit() {
    let employee = this.localStorageService.getItem('loggedUser');
    let employeeDetailsP = this.employeeService.getEmployeeDetails(employee.user_id);

    this.zone = new NgZone({ enableLongStackTrace: false });
    this.url = 'http://belatrix-connect.herokuapp.com:80/api/employee/'+employee.user_id+'/avatar/';
    // this.basicOptions = {
    //   url: 'http://belatrix-connect.herokuapp.com:80/api/employee/'+employee.user_id+'/avatar/',
    //   authToken: employee.token,
    //   authTokenPrefix: 'Token'
    // };

    Promise.all([employeeDetailsP])
      .then(values => {
        this.employeeDetails = values[0];
        this.isLoading = false;
        this.initForm();
      })
      .catch(error => console.log("error"));
  }

  initForm() {
    this.editAccountForm = this.fb.group({
      first_name: [this.employeeDetails.first_name, Validators.required],
      last_name : [this.employeeDetails.last_name, Validators.required],
      skype_id  : [this.employeeDetails.skype_id, Validators.required],
      location : [this.employeeDetails.location.id, Validators.required]
    });
  }

  handleUpload(data: any): void {
    this.zone.run(() => {
      this.response = data;
      this.progress = data.progress.percent / 100;
    });
  }

  submitForm() {
    let accountChangesP;
    let avatarChange;
    let employee = this.localStorageService.getItem('loggedUser');
    if('change on account') {
      accountChangesP = this.employeeService.updateEmployee(employee.user_id, this.editAccountForm.value)
    }

    if('change on avatar') {
      //accountChanges = this.employeeService.updateEmployee(accountData)
    }

    Promise.all([accountChangesP])
      .then(values => {
        // TODO, show confirmation modal
        // hide a loading if present
        this.router.navigateByUrl('/home/account');
      })
      .catch(error => console.log("error"));
  }
}
