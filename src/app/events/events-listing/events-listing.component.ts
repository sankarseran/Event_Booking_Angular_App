import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { events } from '../../shared/eventsList';
import { CommonService } from '../../shared/services/common.service';

@Component({
  selector: 'app-events-listing',
  templateUrl: './events-listing.component.html',
  styleUrls: ['./events-listing.component.scss']
})
export class EventsListingComponent implements OnInit {
  searchKey: string;
  events: { name: string; imageUrl: string; date: number; availableSeats: number; }[];


  constructor(private commonService: CommonService,
              private router: Router) { }

  ngOnInit() {
    this.events = events;
  }

  book(value) {
    this.commonService.setEvent(value);
    this.router.navigate(['/book']);
  }

}
