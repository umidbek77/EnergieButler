import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { CommonModule } from '@angular/common'; 
// PrimeNG modullar
import { RadioButtonModule } from 'primeng/radiobutton';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { DatePickerModule } from 'primeng/datepicker';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

// Direktivalar
import { NumericInputDirective } from '../../../../directives/numeric-input.directive'; 
import { DateMaskDirective } from '../../../../directives/date-mask.directive';
import { NgIf } from '@angular/common';
@Component({
  selector: 'app-step3',
  templateUrl: './step3.component.html',
  styleUrls: ['./step3.component.css'],
  standalone: true,
  imports: [
    RadioButtonModule,
    FloatLabelModule,
    InputTextModule,
    DatePickerModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
    NumericInputDirective,
    DateMaskDirective,
    NgIf,
    CommonModule
  ]
})
export class Step3Component implements OnInit {
  @Output() next = new EventEmitter<void>();
  @Output() back = new EventEmitter<void>();
  @Output() completed = new EventEmitter<any>();

  form!: FormGroup;
  birthDateValue: Date | undefined;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      gender: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      birthDate: ['', Validators.required],
      phone: ['']
    });
  }

  isInvalid(controlName: string): boolean {
    const control = this.form.get(controlName);
    return !!control && control.invalid && control.touched;
  }

  onNext() {
    if (this.form.valid) {
      this.completed.emit(this.form.value);
    } else {
      this.form.markAllAsTouched();
    }
  }

  onBack() {
    this.back.emit();
  }
}