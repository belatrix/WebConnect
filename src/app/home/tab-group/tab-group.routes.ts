import { Routes } from "@angular/router";

import {AccountComponent} from "../../account/account.component";
import {ActivityComponent} from "../../activity/activity.component";
import {RankingComponent} from "../../ranking/ranking.component";
import {TopTagsComponent} from "../../top-tags/top-tags.component";

export const TAB_GROUP_ROUTES: Routes = [
  {path: '', redirectTo: 'account', pathMatch: 'full'},
  {path: 'account', component: AccountComponent},
  {path: 'activity', component: ActivityComponent},
  {path: 'ranking', component: RankingComponent},
  {path: 'top-tags', component: TopTagsComponent}
];
