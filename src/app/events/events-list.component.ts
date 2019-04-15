import { IEvent, EventService } from './shared/index';
import { ActivatedRoute } from '@angular/router';

import { Component, OnInit } from '@angular/core';

@Component({
  // selector: 'events-list',
  template: `
    <div>
    <h1>Upcoming Angular Events</h1>
    <hr>
    <div class = "row">
        <div *ngFor = "let event of events" class = "col-md-5">
    <event-thumbnail  [event] = "event"  (eventClick) = "handleEventClicked($event)" #thumbnail ></event-thumbnail>
    </div></div>
      </div>
    `
})
export class EventsListComponent implements OnInit {

  events: IEvent[];

  constructor(private eventService: EventService,
    private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.events = this.route.snapshot.data['events'];
  // this.eventService.getEvents().subscribe(
  //   events => {
  //     this.events = events
  //   }
  // )
  }

  handleEventClicked(event) {
    console.log(event);
  }


}
