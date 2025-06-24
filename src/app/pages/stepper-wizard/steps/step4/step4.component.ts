import { Component, EventEmitter, Output } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-step4',
  standalone: true,
  templateUrl: './step4.component.html',
  styleUrls: ['./step4.component.css'],
  imports: [CommonModule, ReactiveFormsModule],
})
export class Step4Component {
  @Output() next = new EventEmitter<void>();
  @Output() back = new EventEmitter<void>();

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      delivery: this.fb.group({
        plz: ['', Validators.required],
        city: ['', Validators.required],
        street: ['', Validators.required],
        houseNumber: ['', Validators.required],
      }),
      differentBilling: [false],
      billing: this.fb.group({
        salutation: [''],
        firstName: [''],
        lastName: [''],
        birthDate: [''],
        phone: [''],
        plz: [''],
        city: [''],
        street: [''],
        houseNumber: [''],
      }),
      changeOption: ['wechseln', Validators.required],
    });
  }

  get billingForm() {
    return this.form.get('billing') as FormGroup;
  }

  onSubmit() {
    if (this.form.valid) {
      console.log('Step4 Data:', this.form.value);
      this.next.emit();
    } else {
      this.form.markAllAsTouched();
    }
  }
}
