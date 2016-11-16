import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { MaterialModule } from '@angular/material';

import { RecommendationButtonComponent } from './recommendation-button.component';
import { HeaderComponent } from './header.component';
import { BackButtonComponent } from './back-button.component';
import { LoadingComponent } from './loading/loading.component';

@NgModule({
  imports: [CommonModule, MaterialModule.forRoot()],
  declarations: [RecommendationButtonComponent, HeaderComponent, BackButtonComponent, LoadingComponent],
  providers: [],
  exports: [
    CommonModule,
    RecommendationButtonComponent,
    HeaderComponent,
    BackButtonComponent,
    MaterialModule,
    LoadingComponent
  ]
})
export class SharedModule { }
