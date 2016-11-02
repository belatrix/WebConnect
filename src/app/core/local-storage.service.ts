import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorageService {

  constructor() { }

  getItem(key: string): any {
    return JSON.parse(localStorage.getItem(key));
  }

  setItem(key: string, value: string) {
    // if(key) {
      localStorage.setItem(key, value);
      // this.loggedIn = true;
    // }
  }

  removeItem(key: string) {
    localStorage.removeItem(key);
  }
}
