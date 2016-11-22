import { Injectable } from '@angular/core';
import { Observable } from "rxjs";

import { LocalStorageService } from "./local-storage.service";
import { Employee } from "../shared/employee.model";

@Injectable()
export class SharedDataService {
  public sharedData = new SharedData();

  constructor(private localStorage: LocalStorageService) {}
}

export class SharedData {
  public title: string = '';
  public contactsPage: ContactsPage = new ContactsPage();

  constructor() {}
}

export class ContactsPage {
  public selectedUser: Employee = null;
  public selectUser: boolean = false;
  
  constructor() {}
}