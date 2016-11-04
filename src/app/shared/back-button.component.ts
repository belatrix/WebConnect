import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-back-button',
  template: `
    <button (click)="navigateBack()">Back</button>
  `,
  styleUrls: ['./back-button.component.css']
})
export class BackButtonComponent implements OnInit {

  constructor() { }

  navigateBack() {
    window.history.back();
  }

  ngOnInit() {
  }

}
