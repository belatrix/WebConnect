import { Injectable } from '@angular/core';

import { HttpService, ListSearchResponse } from "./httpService";
import { StarKeyword } from "../shared/starKeyword.model";
import { StarTopEmployee } from "../shared/starTopEmployee.model";

@Injectable()
export class StarService {
  public starKeyword: StarKeyword = null;

  constructor(private httpService: HttpService) {
  }

  getTopTags(searchText: string): Promise<ListSearchResponse<StarKeyword>> {
    return this.httpService.get<ListSearchResponse<StarKeyword>>('star/keyword/list/?search=' + searchText);
  }

  getTopTagsById(keyword: number): Promise<ListSearchResponse<StarTopEmployee>> {
    return this.httpService.get<ListSearchResponse<StarTopEmployee>>('star/keyword/'+keyword+'/list/');
  }
  setStarKeyword(starKeyword: StarKeyword){
    this.starKeyword = starKeyword;
  }

  getStarKeyword():StarKeyword{
    return this.starKeyword;
  }
}


 