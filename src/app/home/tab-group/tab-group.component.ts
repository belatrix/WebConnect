import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab-group',
  templateUrl: './tab-group.component.html',
  styleUrls: ['./tab-group.component.css']
})
export class TabGroupComponent implements OnInit {

  // TODO, use <nav md-tab-nav-bar> with <a md-tab-link .. </a>
  // just for tab with routes. This will also allow us to make a dynamic tabnav.
  // https://github.com/angular/material2/issues/524

  constructor(
    private router: Router
  ) {}

  ngOnInit() {
  }

  public changeTab(e) {
    const _home = "/home";
    let _path;
    switch (e.index) {
      case 0:
        _path = _home+'/account';
        break;
      case 1:
        _path = _home+'/ranking';
        break;
      case 2:
        _path = _home+'/activity';
        break;
      case 3:
        _path = _home+'/top-tags';
        break;
      default:
        // TODO, navigate to 404 page
        break;
    }
    this.router.navigateByUrl(_path);
  }
}
