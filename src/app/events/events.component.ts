import { Component, OnInit, OnDestroy } from '@angular/core';

import { LocalStorageService } from "../core/local-storage.service";
import { EventService } from "../core/event.service";
import {Event} from "../shared/event.model";
import {Subscription} from "rxjs";

@Component({
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit, OnDestroy {

  eventList: Event[] = new Array<Event>();
  subscription: Subscription;
  isLoading: boolean = true;

  constructor(
    private localStorageService: LocalStorageService,
    private eventService: EventService) { }

  ngOnInit() {
    let loggedUser = this.localStorageService.getItem('loggedUser');
    this.subscription = this.eventService.getEventList()
      .subscribe(
        data => this.eventList = data.results,
        error => console.log(error),
        () => this.isLoading = false
      );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
