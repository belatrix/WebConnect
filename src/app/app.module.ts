import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule, MdIconRegistry } from '@angular/material';

import { AppComponent } from './app.component';
import { CoreModule } from "./core/core.module";
import { LogInComponent } from './log-in/log-in.component';
import { RegisterComponent } from './register/register.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { routing } from "./app.routing";
import { RecommendationComponent } from './recommendation/recommendation.component';
import { ContactsComponent } from './contacts/contacts.component';
import { EventsComponent } from './events/events.component';
import { AboutComponent } from './about/about.component';
import { SettingsComponent } from './settings/settings.component';
import { HomeModule } from "./home/home.module";
import { SharedModule } from "./shared/shared.module";
import { CategoriesComponent } from './categories/categories.component';
import { SubCategoriesComponent } from './sub-categories/sub-categories.component';

//import { UPLOAD_DIRECTIVES } from 'ng2-uploader';

@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    RecommendationComponent,
    ContactsComponent,
    EventsComponent,
    AboutComponent,
    SettingsComponent,
    CategoriesComponent,
    SubCategoriesComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    CoreModule,
    HomeModule,
    SharedModule,
    routing,
    MaterialModule.forRoot()
  ],
  providers: [MdIconRegistry],
  bootstrap: [AppComponent]
})
export class AppModule { }
