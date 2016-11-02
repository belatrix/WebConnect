import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  title: string = 'Settings';
  constructor() { }

  ngOnInit() {
  }

}
