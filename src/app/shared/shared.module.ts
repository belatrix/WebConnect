import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';

import { RecommendationButtonComponent } from './recommendation-button.component';
import { HeaderComponent } from './header.component';
import { BackButtonComponent } from './back-button.component';

@NgModule({
  imports: [CommonModule],
  declarations: [RecommendationButtonComponent, HeaderComponent, BackButtonComponent],
  providers: [],
  exports: [
    CommonModule,
    RecommendationButtonComponent,
    FormsModule,
    ReactiveFormsModule,
    HeaderComponent,
    BackButtonComponent,
    MaterialModule
  ]
})
export class SharedModule { }
