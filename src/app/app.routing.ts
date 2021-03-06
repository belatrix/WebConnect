import { Routes, RouterModule } from "@angular/router";

import { LogInComponent } from "./log-in/log-in.component";
import { RegisterComponent } from "./register/register.component";
import { ForgotPasswordComponent } from "./forgot-password/forgot-password.component";
import { RecommendationComponent } from "./recommendation/recommendation.component";
import { HomeComponent } from "./home/home.component";
import { AuthenticationGuard } from "./core/authentication.guard";
import { ContactsComponent } from "./contacts/contacts.component";
import { EventsComponent } from "./events/events.component";
import { SettingsComponent } from "./settings/settings.component";
import { AboutComponent } from "./about/about.component";
import { AccountComponent } from "./account/account.component";
import { CategoriesComponent } from "./categories/categories.component";
import { SubCategoriesComponent } from "./sub-categories/sub-categories.component";

const APP_ROUTES: Routes = [
  {path: 'login', component: LogInComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'forgot-password', component: ForgotPasswordComponent},
  {path: 'about', component: AboutComponent, canActivate: [AuthenticationGuard]},
  {path: 'contacts', component: ContactsComponent, canActivate: [AuthenticationGuard]},
  {path: 'recommendation', component: RecommendationComponent, canActivate: [AuthenticationGuard]},
  {path: 'events', component: EventsComponent, canActivate: [AuthenticationGuard]},
  {path: 'profile/:id', component: AccountComponent, canActivate: [AuthenticationGuard]},
  {path: 'settings', component: SettingsComponent, canActivate: [AuthenticationGuard]},
  {path: 'categories', component: CategoriesComponent, canActivate: [AuthenticationGuard]},
  {path: 'sub-categories/:categoryId', component: SubCategoriesComponent, canActivate: [AuthenticationGuard]},
  {path: '', redirectTo: '/login', pathMatch: 'full'}
  /*{ path: '**', component: PageNotFoundComponent }*/
];

export const routing = RouterModule.forRoot(APP_ROUTES);
