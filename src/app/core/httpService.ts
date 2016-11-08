import { Injectable } from '@angular/core';
import {Http, Response, RequestOptions, Headers} from "@angular/http";
import {Observable} from "rxjs";
import {LocalStorageService} from "./local-storage.service";

@Injectable()
export class HttpService {
    
    public baseUrl: string = 'http://belatrix-connect.herokuapp.com:80/api/';

    constructor(private http: Http, private localStorage: LocalStorageService) { }

    get<T>(url: string): Promise<T> {
        let loggedUser = this.localStorage.getItem('loggedUser');
        let headers = new Headers({'Authorization': 'Token ' + loggedUser.token});
        let options = new RequestOptions({headers: headers});

        return this.http.get(this.baseUrl + url, options)
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}