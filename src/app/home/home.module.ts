import { NgModule } from "@angular/core";
//import { CommonModule } from "@angular/common";

import { HomeComponent } from "./home.component";
import { TabGroupComponent } from "./tab-group/tab-group.component";
import { AccountComponent } from "../account/account.component";
import { EditAccountComponent } from "../account/edit-account.component";
import { StarDetailComponent } from "../account/star-detail.component";
import { RankingDetailComponent } from "../account/ranking-detail.component";
import { UserInfoComponent } from "../account/user-info.component";

import { ActivityComponent } from "../activity/activity.component";
import { RankingComponent } from "../ranking/ranking.component";
import { RankingItemComponent } from "../ranking/ranking-item.component";

import { TopTagsComponent } from "../top-tags/top-tags.component";
import { homeRoutes } from "./home.routes";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  declarations: [
    HomeComponent,
    TabGroupComponent,
    AccountComponent,
    StarDetailComponent,
    ActivityComponent,
    EditAccountComponent,
    RankingComponent,
    RankingDetailComponent,
    RankingItemComponent,
    TopTagsComponent,
    UserInfoComponent
  ],
  imports: [
    homeRoutes,
    //CommonModule,
    SharedModule
  ],
  providers: []
})

export class HomeModule { }
