import { Component, OnInit, Input } from '@angular/core';

import { StarService } from "../core/star.service";
import { StarTopEmployee } from "../shared/starTopEmployee.model";
import { Router } from '@angular/router';
import { LocalStorageService } from "../core/local-storage.service";

@Component({
  selector: 'top-tags-item',
  templateUrl: 'top-tags-item.component.html'
})
export class TopTagsItemComponent implements OnInit {
  @Input()
  source

  constructor(
    private router: Router, 
    private localStorage: LocalStorageService) 
  { }

  ngOnInit() {
  }

  goToProfile(employeePk) {
    let path = "not found page";
    let loggedUser = this.localStorage.getItem('loggedUser');
    if(loggedUser.pk == employeePk) {
      path = "home"
    } else if(!!employeePk) {
      path = 'profile/'+employeePk;
    }
    this.router.navigateByUrl(path)
  }
}
