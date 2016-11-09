import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HomeComponent } from "./home.component";
import { TabGroupComponent } from "./tab-group/tab-group.component";
import { AccountComponent } from "../account/account.component";
import { ActivityComponent } from "../activity/activity.component";
import { RankingComponent } from "../ranking/ranking.component";
import { TopTagsComponent } from "../top-tags/top-tags.component";
import { homeRoutes } from "./home.routes";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  declarations: [
    HomeComponent,
    TabGroupComponent,
    AccountComponent,
    ActivityComponent,
    RankingComponent,
    TopTagsComponent
  ],
  imports: [
    homeRoutes,
    SharedModule,
    CommonModule
  ],
  providers: []
})

export class HomeModule { }
