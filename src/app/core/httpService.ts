import { Injectable } from '@angular/core';
import {Http, Response, RequestOptions, Headers} from "@angular/http";
import {Observable} from "rxjs";
import {LocalStorageService} from "./local-storage.service";

@Injectable()
export class HttpService {
  public baseUrl: string = 'http://belatrix-connect.herokuapp.com:80/api/';

  constructor(private http: Http, private localStorage: LocalStorageService) { }

  getHttpOptions(){
    let loggedUser = this.localStorage.getItem('loggedUser');
    let headers = new Headers({'Authorization': 'Token ' + loggedUser.token});
    let options = new RequestOptions({headers: headers});

    return options;
  }

  get<T>(url: string): Promise<T> {
    let options = this.getHttpOptions();
    return this.http.get(this.baseUrl + url, options)
      .toPromise()
      .then(response => response.json())
      .catch(this.handleError);
  }

  patch<T>(url: string, data): Promise<T> {
    let options = this.getHttpOptions();
    return this.http.patch(this.baseUrl + url, data, options)
      .toPromise()
      .then(response => response.json())
      .catch(this.handleError);
  }

  post<T>(url: string): Promise<T> {
    let options = this.getHttpOptions();
    return this.http.post(this.baseUrl + url, options)
      .toPromise()
      .then(response => response.json())
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}

export class ListSearchResponse<T> {
  constructor(
    public results: Array<T>
  ) {}
}