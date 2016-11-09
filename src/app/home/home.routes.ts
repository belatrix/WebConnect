import { Routes, RouterModule } from "@angular/router";

import {AuthenticationGuard} from "../core/authentication.guard";
import {HomeComponent} from "./home.component";
import {TAB_GROUP_ROUTES} from "./tab-group/tab-group.routes";


const HOME_ROUTES: Routes = [
  {path: 'home', component: HomeComponent, canActivate: [AuthenticationGuard], children: TAB_GROUP_ROUTES}
];

export const homeRoutes = RouterModule.forChild(HOME_ROUTES)
