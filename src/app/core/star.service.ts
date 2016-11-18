import { Injectable } from '@angular/core';

import { HttpService, ListSearchResponse } from "./httpService";
import { StarKeyword } from "../shared/starKeyword.model";

@Injectable()
export class StarService {

  constructor(private httpService: HttpService) {
  }

  getTopTags(searchText: string): Promise<ListSearchResponse<StarKeyword>> {
    return this.httpService.get<ListSearchResponse<StarKeyword>>('star/keyword/list/?search=' + searchText);
  }

}
