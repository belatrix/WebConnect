import { Component, OnInit } from '@angular/core';

import { AppPage } from "../core/appPage";

@Component({
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent extends AppPage implements OnInit {

  constructor() {
    super('Register');
   }

  ngOnInit() {
  }

}
