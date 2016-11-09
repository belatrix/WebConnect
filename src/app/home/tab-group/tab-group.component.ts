import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab-group',
  templateUrl: './tab-group.component.html',
  styleUrls: ['./tab-group.component.css']
})
export class TabGroupComponent implements OnInit {
  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  public changeTab(e) {
    switch (e.index) {
      case 0:
        this.router.navigateByUrl('/account');
        break;
      case 1:
        this.router.navigateByUrl('/ranking');
        break;
      case 2:
        this.router.navigateByUrl('/activity');
        break;
      case 3:
        this.router.navigateByUrl('/top-tags');
        break;

    default:
        // TODO, navigate to 404 page
        break;
    }
  }
}
