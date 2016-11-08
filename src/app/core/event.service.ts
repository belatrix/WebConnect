import { Injectable } from '@angular/core';
import {Http, Response, RequestOptions, Headers} from "@angular/http";
import {Observable} from "rxjs";
import {LocalStorageService} from "./local-storage.service";
import {HttpService} from "./httpService";

@Injectable()
export class EventService {

  constructor(private httpService: HttpService) {
  }

  getEventList(): Promise<EventSearchResponse> {
    return this.httpService.get<EventSearchResponse>('event/list/');
  }

}

export class EventSearchResponse {
  constructor(
    public results: Array<Event>
  ) {}
}
