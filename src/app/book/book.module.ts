import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { BookComponent } from './book/book.component';

const routes: Routes = [
  { path: '', component: BookComponent }
];

@NgModule({
  declarations: [BookComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class BookModule { }
