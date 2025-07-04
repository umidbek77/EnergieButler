import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FloatLabelModule } from 'primeng/floatlabel';
import { DatePickerModule } from 'primeng/datepicker';
import { NumericInputDirective } from '../../directives/numeric-input.directive';
import { DateMaskDirective } from '../../directives/date-mask.directive';

@Component({
  selector: 'app-base-date',
  templateUrl: './base-date.component.html',
  styleUrls: ['./base-date.component.css'],
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    FloatLabelModule,
    DatePickerModule,
    // NumericInputDirective,
    // DateMaskDirective
  ]
})
export class BaseDateComponent implements OnInit {
  value3: Date | undefined;
  @Input() form!: FormGroup;

  formGroup!: FormGroup;
  birthDateValue: Date | undefined;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      phone: ['']
    });
  }
}