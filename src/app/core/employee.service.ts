import { Injectable } from '@angular/core';
import {Http, Response, RequestOptions, Headers} from "@angular/http";
import {Observable} from "rxjs";
import {LocalStorageService} from "./local-storage.service";
import {Employee} from "../shared/employee.model";
import {StarDetail} from "../shared/star-detail.model";
import {HttpService, ListSearchResponse} from "./httpService";

@Injectable()
export class EmployeeService {

  constructor(private httpService: HttpService, private localStorage: LocalStorageService) { }

  getEmployeeDetails(id: number): Promise<Employee> {
    let loggedUser = this.localStorage.getItem('loggedUser');

    return this.httpService.get<Employee>('employee/' + id + '/');
  }

  getEmployeeList(searchText: string): Promise<ListSearchResponse<Employee>> {
    let loggedUser = this.localStorage.getItem('loggedUser');
    return this.httpService.get<ListSearchResponse<Employee>>('employee/list/?search=' + searchText);
  }

  getEmployeeStarList(id: number) {
    return this.httpService.get<any>('star/' + id + '/list/');
  }
}
