import { Component, OnInit } from '@angular/core';
import { events } from '../../shared/eventsList';

@Component({
  selector: 'app-events-listing',
  templateUrl: './events-listing.component.html',
  styleUrls: ['./events-listing.component.scss']
})
export class EventsListingComponent implements OnInit {
  searchKey: string;
  events: { name: string; imageUrl: string; date: number; availableSeats: number; }[];


  constructor() { }

  ngOnInit() {
    this.events = events;
  }

}
