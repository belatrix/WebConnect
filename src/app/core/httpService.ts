import { Injectable } from '@angular/core';
import {Http, Response, RequestOptions, Headers} from "@angular/http";
import {Observable} from "rxjs";
import {LocalStorageService} from "./local-storage.service";

@Injectable()
export class HttpService {
    
    public baseUrl: string = 'http://belatrix-connect.herokuapp.com:80/api/';

    constructor(private http: Http, private localStorage: LocalStorageService) { }

    get(url: string) {
        let loggedUser = this.localStorage.getItem('loggedUser');
        let headers = new Headers({'Authorization': 'Token ' + loggedUser.token});
        let options = new RequestOptions({headers: headers});

        return this.http.get(this.baseUrl + url, options)
        .map((res: Response) => res.json())
        .catch((error: any) => Observable.throw(error.json().error || 'Server Error')
        );
    }
}