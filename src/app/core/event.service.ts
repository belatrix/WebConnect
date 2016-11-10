import { Injectable } from '@angular/core';
import {Http, Response, RequestOptions, Headers} from "@angular/http";
import {Observable} from "rxjs";
import {LocalStorageService} from "./local-storage.service";
import {HttpService, ListSearchResponse} from "./httpService";

@Injectable()
export class EventService {

  constructor(private httpService: HttpService) {
  }

  getEventList(): Promise<ListSearchResponse<Event>> {
    return this.httpService.get<ListSearchResponse<Event>>('event/list/');
  }

}
