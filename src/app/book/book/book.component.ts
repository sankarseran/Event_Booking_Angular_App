import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/shared/services/common.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {
  selectedEvent: any;
  bookForm: FormGroup;
  seats = [1, 2, 3, 4, 5, 6];
  attendees: FormArray;
  isDisable: boolean;

  constructor(
    private common: CommonService,
    private fb: FormBuilder,
    private router: Router) { }

    get formAttendees() { return this.bookForm.get('attendees') as FormArray; }

  ngOnInit() {
    if (this.common.selectedEvent) {
      this.selectedEvent = this.common.selectedEvent;
    } else {
      this.router.navigate(['']);
    }
    this.buildForm();
  }

  buildForm() {
    this.bookForm = this.fb.group({
      userName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.pattern(this.common.emailPattern)]),
      phoneNumber: new FormControl('', [Validators.minLength(10), Validators.maxLength(10)]),
      numberOfSeats: new FormControl('', [Validators.required]),
      attendees: this.fb.array([])
    });
  }

  crateAttendee() {
    return this.fb.group({
      attendee: new FormControl('', [Validators.required])
    });
  }

  addItem(): void {
    this.attendees = this.bookForm.get('attendees') as FormArray;
    this.attendees.push(this.crateAttendee());
  }

  submit() {
    this.bookForm.patchValue({
      userName: this.bookForm.value.userName.trim()
    });
    if (this.bookForm.valid) {
      this.isDisable = true;
      this.selectedEvent.availableSeats -= this.selectedEvent.availableSeats;
      this.bookForm.disable();
      console.log(JSON.stringify(this.bookForm.value, null, 2));
    }
  }

  seatsValueChanged() {
    const noOfSeats = this.bookForm.value.numberOfSeats;
    this.attendees = this.bookForm.get('attendees') as FormArray;
    if (noOfSeats > 1) {
      this.bookForm.get('numberOfSeats').setValidators([Validators.required, Validators.max(this.selectedEvent.availableSeats)]);
      if (this.attendees.length) { this.attendees.clear(); }
      for (let i = (noOfSeats - 1); i > 0; i--) {
        console.log(noOfSeats, i);
        this.addItem();
      }
    } else {
      if (this.attendees.length) { this.attendees.clear(); }
      this.bookForm.get('numberOfSeats').setValidators([Validators.required]);
    }
  }

  // error messages
  getUserNameErrorMessage() {
    return this.bookForm.get('userName').hasError('required') ? 'Please enter your name' : '';
  }

  getEmailErrorMessage() {
    const email = this.bookForm.get('email');
    return email.hasError('required') ? 'Please enter your email' :
      email.hasError('pattern') ? 'Invalid email' : '';
  }

  getPhoneErrorMessage() {
    const phone = this.bookForm.get('phoneNumber');
    return phone.hasError('minlength') || phone.hasError('maxlength') ? 'Please enter 10 digit phone number'
      : '';
  }

  getSeatsErrorMessage() {
    const seats = this.bookForm.get('numberOfSeats');
    return seats.hasError('required') ? 'Please enter number of seats' :
      seats.value > this.selectedEvent.availableSeats ? 'Number of seats selected is more than available seats'
        : '';
  }

}
