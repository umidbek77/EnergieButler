import { Component, Input, OnInit, inject } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, DateAdapter, MAT_DATE_FORMATS } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LOCALE_ID } from '@angular/core';
import { NumericInputDirective } from '../../directives/numeric-input.directive'; 
import { DateMaskDirective } from '../../directives/date-mask.directive';

export const CUSTOM_DATE_FORMATS = {
  parse: {
    dateInput: 'dd.MM.yyyy',
  },
  display: {
    dateInput: 'dd.MM.yyyy',
    monthYearLabel: 'MMMM yyyy',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM yyyy',
  },
};

@Component({
  selector: 'app-base-date',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    MatButtonModule,
    NumericInputDirective,
    DateMaskDirective
  ],
  templateUrl: './base-date.component.html',
  styleUrl: './base-date.component.css',
  providers: [
    { provide: MAT_DATE_FORMATS, useValue: CUSTOM_DATE_FORMATS },
    { provide: LOCALE_ID, useValue: 'de-DE' }
  ]
})
export class BaseDateComponent  implements OnInit{
  @Input() form!: FormGroup;
  private dateAdapter = inject(DateAdapter);

  ngOnInit(): void {
    this.dateAdapter.setLocale('de-DE');
  }

  isInvalid(controlName: string): boolean {
    const control = this.form?.get(controlName);
    return control ? control.invalid && control.touched : false;
  }
}

