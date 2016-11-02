import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {AuthenticationService} from "../core/authentication.service";
import {Router} from "@angular/router";

@Component({
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  signInForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authenticationService: AuthenticationService,
    private router: Router
  ) { }

  logIn(){
    this.authenticationService.logIn(this.signInForm.value)
      .subscribe(() => {
        if (this.authenticationService.isLoggedIn()) {
          // this.router.navigate(['']);
          let redirect = this.authenticationService.redirectUrl ? this.authenticationService.redirectUrl : '';
          this.router.navigate([redirect]);
        }
      });
  }

  ngOnInit(){
    this.signInForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

}
