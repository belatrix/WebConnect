import { Injectable } from '@angular/core';
import {Http, Response, RequestOptions, Headers} from "@angular/http";
import {Observable} from "rxjs";
import {LocalStorageService} from "./local-storage.service";
import {Employee} from "../shared/employee.model";

@Injectable()
export class EventService {

  private url: string = 'http://belatrix-connect.herokuapp.com:80/api/';

  constructor(private http: Http, private localStorage: LocalStorageService) { }

  getEventList(): Observable<EventSearchResponse> {
    let loggedUser = this.localStorage.getItem('loggedUser');
    let headers = new Headers({'Authorization': 'Token ' + loggedUser.token});
    let options = new RequestOptions({headers: headers});

    return this.http.get(this.url + 'event/list/', options)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server Error')
      );
  }

}

export class EventSearchResponse {
  constructor(
    public results: Array<Event>
  ) {}
}
