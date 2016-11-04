import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';

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
    BackButtonComponent
  ]
})
export class SharedModule { }
