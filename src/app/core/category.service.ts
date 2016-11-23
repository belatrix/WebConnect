import { Injectable } from '@angular/core';

import { HttpService, ListSearchResponse } from "./httpService";
import { Category } from "../shared/category.model";

@Injectable()
export class CategoryService {

  constructor(private httpService: HttpService) { }

  getAllCategories(): Promise<Array<Category>> {
    return this.httpService.get<Array<Category>>('category/list/');
  }

}
