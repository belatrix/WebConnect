import { Component, OnInit } from '@angular/core';

import { LocalStorageService } from "../core/local-storage.service";
import { ActivityService } from "../core/activity.service";
import { Notification } from "../shared/notification.model";
import { AppPage } from "../core/appPage";

@Component({
  templateUrl: 'activity.component.html',
  styleUrls: ['activity.component.css']
})
export class ActivityComponent extends AppPage implements OnInit {

  notificationList: Notification[] = new Array<Notification>();
  isLoading: boolean = false;

  constructor(
    private localStorageService: LocalStorageService,
    private activityService: ActivityService) {
    super('Activity');
   }

  ngOnInit() {
    this.search();
  }

  search() {
    this.isLoading = true;
    let loggedUser = this.localStorageService.getItem('loggedUser');
    this.activityService.getAllNotificationsForEmployee(loggedUser.user_id)
      .then(data => {
        this.notificationList = data.results;
        this.isLoading = false;
      })
      .catch(error => console.log("error"));
  }

}
