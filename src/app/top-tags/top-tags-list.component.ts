import { Component, OnInit } from '@angular/core';

import { StarService } from "../core/star.service";
//import { StarKeyword } from "../shared/starKeyword.model";
import { StarTopEmployee } from "../shared/starTopEmployee.model";
import { Router } from '@angular/router';

@Component({
  templateUrl: 'top-tags-list.component.html'
})
export class TopTagsListComponent implements OnInit {
 
  star:Connect.Models.IStarKeyword;
  isLoading: boolean = false;
  starTopEmployeeList: Connect.Models.IStarKeyword[];
  nameTag: string="";
  constructor(
    private starService: StarService, 
    private router: Router) 
  { }

  ngOnInit() {
    this.star = this.starService.getStarKeyword();
    if(this.star!=null){
      this.nameTag = this.star.name;
      this.getStarTopEmployeeList();
    } else {
      this.backToTopTags();
    }
  }

  getStarTopEmployeeList() {
    this.isLoading = true;
    let self = this;
       this.starService.getTopTagsById(this.star.pk)
       .subscribe(result=>{
           self.starTopEmployeeList=result;
           this.isLoading =  !this.isLoading;
       }, error=>{
           console.log(error);
       });
  }

  backToTopTags(){
      this.router.navigateByUrl('/home/top-tags');
  }
}


