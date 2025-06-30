import { Component, EventEmitter, Output } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-step4',
  standalone: true,
  templateUrl: './step4.component.html',
  styleUrls: ['./step4.component.css'],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatButtonModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
  ],
})
export class Step4Component {
  @Output() next = new EventEmitter<void>();
  @Output() back = new EventEmitter<void>();

  form: FormGroup;

  cities = ['Berlin', 'München', 'Hamburg', 'Köln'];
  streets = ['Hauptstraße', 'Bahnhofstraße', 'Lindenweg', 'Goethestraße'];

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      delivery: this.fb.group({
        plz: ['', [Validators.required]],
        city: ['', [Validators.required]],
        street: ['', [Validators.required]],
        houseNumber: ['', [Validators.required]],
      }),
      changeOption: ['wechseln', Validators.required],
      differentBilling: [false],
      billing: this.fb.group({
        salutation: ['', Validators.required],
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        birthDate: ['', Validators.required],
        phone: [
          '',
          [Validators.required, Validators.pattern(/^(\+49|0)[1-9]\d{9,}$/)],
        ],
        plz: ['', Validators.required],
        city: ['', Validators.required],
        street: ['', Validators.required],
        houseNumber: ['', Validators.required],
      }),
    });

    this.billingForm.disable();

    this.form.get('differentBilling')?.valueChanges.subscribe((checked) => {
      if (checked) {
        this.billingForm.enable();
      } else {
        this.billingForm.reset();
        this.billingForm.disable();
      }
    });
  }

  get billingForm(): FormGroup {
    return this.form.get('billing') as FormGroup;
  }

  onSubmit(): void {
    if (this.form.valid) {
      console.log('Step4 Data:', this.form.value);
      this.next.emit();
    } else {
      this.form.markAllAsTouched();
    }
  }

  onBack(): void {
    this.back.emit();
  }
}
