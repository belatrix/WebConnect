import { Injectable } from '@angular/core';

import { HttpService, ListSearchResponse } from "./httpService";
import { Category } from "../shared/category.model";
import { SubCategory } from "../shared/sub-category.model";

@Injectable()
export class CategoryService {

  constructor(private httpService: HttpService) { }

  getAllCategories(): Promise<Array<Category>> {
    return this.httpService.get<Array<Category>>('category/list/');
  }

  getCategorySubCategories(category_id: number): Promise<Array<SubCategory>> {
    return this.httpService.get<Array<SubCategory>>('category/' + category_id + '/subcategory/list/');
  }

}
