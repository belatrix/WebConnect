import { Component, OnInit } from '@angular/core';

import { StarService } from "../core/star.service";
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs/Rx';

@Component({
  templateUrl: 'top-tags.component.html',
  styleUrls: ['top-tags.component.css']
})
export class TopTagsComponent implements OnInit {

  tagsList: Connect.Models.IStarKeyword[];
  isLoading: boolean = false;
  searchText: string = '';

  constructor(private starService: StarService, private router: Router) { }

  ngOnInit() {
    this.search();       
  }

  search() {
    this.isLoading = true;
    let self = this;
       this.starService.getTopTags(this.searchText)
       .subscribe(result=>{
           self.tagsList=result;
           this.isLoading =  !this.isLoading;
       }, error=>{
           console.log(error);
       });
  }
 getTopTagsListById(starKeyword: Connect.Models.IStarKeyword){
        const _path = '/home/top-tags/'+starKeyword.pk+'/list';
        this.starService.setStarKeyword(starKeyword);
        this.router.navigateByUrl(_path);
  }

}
