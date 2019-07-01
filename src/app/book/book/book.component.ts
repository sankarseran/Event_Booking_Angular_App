import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/shared/services/common.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {
  selectedEvent: any;

  constructor(
    private common: CommonService,
    private router: Router) { }

  ngOnInit() {
    if (this.common.selectedEvent) {
      this.selectedEvent = this.common.selectedEvent;
    } else {
      this.router.navigate(['']);
    }
  }

}
