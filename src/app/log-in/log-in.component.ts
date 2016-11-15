import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

import { AuthenticationService } from "../core/authentication.service";
import { AppPage } from "../core/appPage";

@Component({
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent extends AppPage implements OnInit {
  signInForm: FormGroup;
  errorMessage: string = '';

  constructor(
    private fb: FormBuilder,
    private authenticationService: AuthenticationService,
    private router: Router
  ) {
    super('LogIn');
    this.isPublicPage = true;
   }

  logIn(){
    this.errorMessage = '';
    this.authenticationService.logIn(this.signInForm.value)
      .subscribe(() => {
        if (this.authenticationService.isLoggedIn()) {
          // this.router.navigate(['']);
          let redirect = this.authenticationService.redirectUrl ? this.authenticationService.redirectUrl : '/home';
          this.router.navigate([redirect]);
        }
      },
      (error) => this.errorMessage = "Invalid credentials");
  }

  ngOnInit(){
    this.signInForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

}
