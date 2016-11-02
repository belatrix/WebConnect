import {NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {AuthenticationGuard} from "./authentication.guard";
import { AuthenticationService } from '../core/authentication.service';
import {LocalStorageService} from "./local-storage.service";
import {EmployeeService} from "./employee.service";

@NgModule({
  imports: [CommonModule],
  declarations: [],
  providers: [
    AuthenticationGuard,
    AuthenticationService,
    LocalStorageService,
    EmployeeService
  ],
  exports: []
})
export class CoreModule { }
