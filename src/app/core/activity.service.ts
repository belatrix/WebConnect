import { Injectable } from '@angular/core';

import { HttpService, ListSearchResponse } from "./httpService";
import { Notification } from "../shared/notification.model";

@Injectable()
export class ActivityService {

  constructor(private httpService: HttpService) { }

  getAllNotificationsForEmployee(employee_id: number): Promise<ListSearchResponse<Notification>> {
    return this.httpService.get<ListSearchResponse<Notification>>('activity/get/notification/employee/'+employee_id+'/all/');
  }
}
