import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';

import { RecommendationButtonComponent } from './recommendation-button.component';
import { HeaderComponent } from './header.component';

@NgModule({
  imports: [CommonModule],
  declarations: [RecommendationButtonComponent, HeaderComponent],
  providers: [],
  exports: [
    CommonModule,
    RecommendationButtonComponent,
    HeaderComponent
  ]
})
export class SharedModule { }
