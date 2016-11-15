import {NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {AuthenticationGuard} from "./authentication.guard";
import { AuthenticationService } from '../core/authentication.service';
import {LocalStorageService} from "./local-storage.service";
import {EmployeeService} from "./employee.service";
import {EventService} from "./event.service";
import {HttpService} from "./httpService";
import { SharedDataService } from "./sharedData.service";
import { ActivityService } from "./activity.service";

@NgModule({
  imports: [CommonModule],
  declarations: [],
  providers: [
    AuthenticationGuard,
    AuthenticationService,
    LocalStorageService,
    EmployeeService,
    EventService,
    HttpService,
    SharedDataService,
    ActivityService
  ],
  exports: []
})
export class CoreModule { }
