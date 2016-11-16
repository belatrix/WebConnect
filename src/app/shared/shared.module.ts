import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { UPLOAD_DIRECTIVES } from 'ng2-uploader';

import { RecommendationButtonComponent } from './recommendation-button.component';
import { HeaderComponent } from './header.component';
import { BackButtonComponent } from './back-button.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    RecommendationButtonComponent,
    UPLOAD_DIRECTIVES,
    HeaderComponent,
    BackButtonComponent
  ],
  providers: [],
  exports: [
    CommonModule,
    UPLOAD_DIRECTIVES,
    RecommendationButtonComponent,
    FormsModule,
    ReactiveFormsModule,
    HeaderComponent,
    BackButtonComponent,
    MaterialModule
  ]
})
export class SharedModule { }
