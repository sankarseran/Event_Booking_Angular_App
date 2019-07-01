import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../shared/material.module';

import { BookComponent } from './book/book.component';

const routes: Routes = [
  { path: '', component: BookComponent }
];

@NgModule({
  declarations: [BookComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ]
})
export class BookModule { }
