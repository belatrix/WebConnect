import { Component, OnInit } from '@angular/core';

import { StarKeyword } from "../shared/starKeyword.model";
import { StarService } from "../core/star.service";
import { Router } from '@angular/router';

@Component({
  templateUrl: 'top-tags.component.html',
  styleUrls: ['top-tags.component.css']
})
export class TopTagsComponent implements OnInit {

  tagsList: StarKeyword[] = new Array<StarKeyword>();
  isLoading: boolean = false;
  searchText: string = '';

  constructor(private starService: StarService, private router: Router) { }

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

  getTopTagsListById(starKeyword: StarKeyword){
        const _path = '/home/top-tags/'+starKeyword.pk+'/list';
        this.starService.setStarKeyword(starKeyword);
        this.router.navigateByUrl(_path);
  }

}
