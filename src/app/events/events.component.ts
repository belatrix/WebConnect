import { Component, OnInit } from '@angular/core';

import { LocalStorageService } from "../core/local-storage.service";
import { EventService } from "../core/event.service";
import { Event } from "../shared/event.model";
import { SharedDataService } from "../core/sharedData.service";
import { AppPage } from "../core/appPage";

@Component({
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent extends AppPage implements OnInit {

  eventList: Event[] = new Array<Event>();
  isLoading: boolean = true;

  constructor(
    private localStorageService: LocalStorageService,
    private eventService: EventService,
    private sharedDataService: SharedDataService) {
      super('Events');
     }

  ngOnInit() {
    let loggedUser = this.localStorageService.getItem('loggedUser');
    this.eventService.getEventList()
      .then(data => {
        this.eventList = data.results;
        this.isLoading = false;
      })
      .catch(error => console.log("error"));
  }

}
