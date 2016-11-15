import { Component, OnInit } from '@angular/core';

import { AppPage } from "../core/appPage";

@Component({
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent extends AppPage implements OnInit {

  constructor() {
    super('Forgot Password');
    this.isPublicPage = true;
   }

  ngOnInit() {
  }

}
