import { Injectable } from '@angular/core';
import {Observable} from "rxjs";

import {LocalStorageService} from "./local-storage.service";

@Injectable()
export class SharedDataService {

  public sharedData = new SharedData('');

  constructor(private localStorage: LocalStorageService) {}
}

export class SharedData {
  constructor(public title: string) {}
}