import { Component, OnInit } from '@angular/core';

import { AppPage } from "../core/appPage";

@Component({
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent extends AppPage implements OnInit {
  
  constructor() {
    super('Settings');
   }

  ngOnInit() {
  }

}
