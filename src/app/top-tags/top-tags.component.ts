import { Component, OnInit } from '@angular/core';

import { StarKeyword } from "../shared/starKeyword.model";
import { StarService } from "../core/star.service";

@Component({
  templateUrl: 'top-tags.component.html',
  styleUrls: ['top-tags.component.css']
})
export class TopTagsComponent implements OnInit {

  tagsList: StarKeyword[] = new Array<StarKeyword>();
  isLoading: boolean = false;
  searchText: string = '';

  constructor(private starService: StarService) { }

  ngOnInit() {
    this.search();
  }

  search() {
    this.isLoading = true;
    this.starService.getTopTags(this.searchText)
      .then(data => {
        this.tagsList = data.results;
        this.isLoading = false;
      })
      .catch(error => console.log("error"));
  }

}
