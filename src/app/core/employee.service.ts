import { Injectable } from '@angular/core';
import {Http, Response, RequestOptions, Headers} from "@angular/http";
import {Observable} from "rxjs";
import {LocalStorageService} from "./local-storage.service";
import {Employee} from "../shared/employee.model";
import {HttpService} from "./httpService";

@Injectable()
export class EmployeeService {

  constructor(private httpService: HttpService, private localStorage: LocalStorageService) { }

  getEmployeeDetails(id: number): Promise<Employee> {
    let loggedUser = this.localStorage.getItem('loggedUser');

    return this.httpService.get<Employee>('employee/' + id + '/');
  }
}
