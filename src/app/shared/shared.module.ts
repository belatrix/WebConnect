import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
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
    HeaderComponent,
    BackButtonComponent,
    MaterialModule
  ]
})
export class SharedModule { }
