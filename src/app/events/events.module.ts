import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../shared/material.module';
import { EventsListingComponent } from './events-listing/events-listing.component';
import { FlexLayoutModule } from '@angular/flex-layout';

const routes: Routes = [
  { path: '', component: EventsListingComponent }
];

@NgModule({
  declarations: [EventsListingComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule,
    FormsModule,
    FlexLayoutModule
  ],
  providers: []
})
export class EventsModule { }
