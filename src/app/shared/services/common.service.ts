import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  selectedEvent: any;

  constructor() { }

  setEvent(value) {
    this.selectedEvent = value;
  }

  removeEvent() {
    this.selectedEvent = null;
  }
}
