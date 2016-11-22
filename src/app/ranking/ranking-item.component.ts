import { Input, Component, OnInit } from '@angular/core';
import {LocalStorageService} from "../core/local-storage.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-ranking-item',
  templateUrl: './ranking-item.component.html'
})
export class RankingItemComponent implements OnInit {
  @Input()
  source;

  constructor(
    private router: Router,
    private localStorage: LocalStorageService
  ) { }

  ngOnInit() {
  }

  goToProfile(employee) {
    let path = "not found page";
    let loggedUser = this.localStorage.getItem('loggedUser');
    if(loggedUser.pk == employee.pk) {
      path = "home"
    } else if(!!employee.pk) {
      path = 'profile/'+employee.pk;
    }
    this.router.navigateByUrl(path)
  }

}
