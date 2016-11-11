import { Component, OnInit } from '@angular/core';

import { AppPage } from "../core/appPage";

@Component({
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent extends AppPage implements OnInit {

  constructor() {
    super('About');
   }

  ngOnInit() {
  }

}
