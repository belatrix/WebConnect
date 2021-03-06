import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';
//import { Ng2UploaderModule } from 'ng2-uploader';

//import { FileUploader } from 'ng2-file-upload';
//import { FileUploader } from '../../../node_modules/ng2-file-upload';

//import { FileUploader } from '../../../ng2-file-upload';

import { RecommendationButtonComponent } from './recommendation-button.component';
import { HeaderComponent } from './header.component';
import { BackButtonComponent } from './back-button.component';
import { LoadingComponent } from './loading/loading.component';

@NgModule({
  imports: [CommonModule, MaterialModule.forRoot()],
  declarations: [
    RecommendationButtonComponent,
    HeaderComponent,
    BackButtonComponent,
    LoadingComponent
  ],
  providers: [],
  exports: [
    CommonModule,
    RecommendationButtonComponent,
    FormsModule,
    ReactiveFormsModule,
    HeaderComponent,
    BackButtonComponent,
    MaterialModule,
    LoadingComponent
  ]
})
export class SharedModule { }
