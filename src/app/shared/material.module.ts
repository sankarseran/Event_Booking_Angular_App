import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatIconModule,
  MatCardModule,
  MatMenuModule,
  MatGridListModule,
  MatSidenavModule,
  MatToolbarModule,
  MatListModule,
  MatFormFieldModule,
  MatInputModule,
  MatExpansionModule,
  MatTooltipModule,
  MatDialogModule,
  MatSnackBarModule,
  MatProgressSpinnerModule,
  MatPaginatorModule,
  MatRadioModule,
  MatSelectModule,
  MatTableModule,
  MatCheckboxModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatSortModule,
  MatAutocompleteModule,
  MatChipsModule,
  MatTabsModule,
} from '@angular/material';
import { CdkTableModule } from '@angular/cdk/table';
import { FilterPipe } from './pipes/filter.pipe';
import { PreventKeyInputDirective } from './directives/prevent-key-input.directive';
// set required material modules for the applcation
const reqModules = [
  MatToolbarModule,
  MatTabsModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatGridListModule,
  MatCardModule,
  MatMenuModule,
  MatFormFieldModule,
  MatInputModule,
  MatExpansionModule,
  MatTooltipModule,
  MatDialogModule,
  MatSnackBarModule,
  MatProgressSpinnerModule,
  MatPaginatorModule,
  MatRadioModule,
  MatSelectModule,
  MatTableModule,
  MatSortModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatCheckboxModule,
  MatAutocompleteModule,
  MatChipsModule,
  MatTabsModule,
  CdkTableModule
];

@NgModule({
  imports: reqModules,
  exports: [reqModules, PreventKeyInputDirective, FilterPipe],
  declarations: [PreventKeyInputDirective, FilterPipe]
})
export class MaterialModule { }
