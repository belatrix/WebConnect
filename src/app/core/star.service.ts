import { Injectable } from '@angular/core';

import { HttpService, ListSearchResponse } from "./httpService";
//import { StarKeyword } from "../shared/starKeyword.model";
import { StarTopEmployee } from "../shared/starTopEmployee.model";
import { Observable } from 'rxjs/Rx';

@Injectable()
export class StarService {
 public starKeyword:Connect.Models.IStarKeyword;
  
  constructor(private httpService: HttpService) {
  }

  getTopTags(searchText: string): Observable<Connect.Models.IStarKeyword[]> {
    return this.httpService.get2<Connect.Models.IStarKeyword[]>('star/keyword/list/?search=' + searchText)
        .map((response) => {
          let i = 0;
          response.forEach(star => {
            i++;
            star.name=i+". "+star.name;
          });
          return response;
        });
  }

  getTopTagsById(keyword: number): Observable<Connect.Models.IStarKeyword[]> {
    return this.httpService.get2<Connect.Models.IStarKeyword[]>('star/keyword/'+keyword+'/list/');
  }
  setStarKeyword(starKeyword: Connect.Models.IStarKeyword){
    this.starKeyword = starKeyword;
  }

  getStarKeyword():Connect.Models.IStarKeyword{
    return this.starKeyword;
  }
}


 