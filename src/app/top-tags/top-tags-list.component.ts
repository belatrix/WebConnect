import { Component, OnInit } from '@angular/core';

import { StarService } from "../core/star.service";
import { StarKeyword } from "../shared/starKeyword.model";
import { StarTopEmployee } from "../shared/starTopEmployee.model";
import { Router } from '@angular/router';

@Component({
  templateUrl: 'top-tags-list.component.html'
})
export class TopTagsListComponent implements OnInit {

  star:StarKeyword;
  isLoading: boolean = false;
  starTopEmployeeList: StarTopEmployee[] = new Array<StarTopEmployee>();

  constructor(
    private starService: StarService, 
    private router: Router) 
  { }

  ngOnInit() {
    this.star = this.starService.getStarKeyword();
    if(this.star!=null){
      this.getStarTopEmployeeList();
    } else {
      this.router.navigateByUrl('/home/top-tags');
    }
  }

  getStarTopEmployeeList() {
    this.isLoading = true;
    this.starService.getTopTagsById(this.star.pk)
      .then(data => {
        this.starTopEmployeeList = data.results;
        this.isLoading = false;
      })
      .catch(error => console.log("error"));
  }

}
