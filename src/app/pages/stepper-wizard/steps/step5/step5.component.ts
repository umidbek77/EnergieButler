import { Component, EventEmitter, Output } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-step5',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './step5.component.html',
  styleUrls: ['./step5.component.css'],
})
export class Step5Component {
  @Output() next = new EventEmitter<void>();
  @Output() back = new EventEmitter<FormGroup>();
  @Output() completed = new EventEmitter<any>();

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      switchDateOption: ['fastest', Validators.required],
      knowsEndDate: [false],
      endDate: [''],
      meterNumber: ['', Validators.required],
      customerNumber: ['', Validators.required],
      addLater: [true],
      knowsMarketId: [true],
      marketLocationId: [''],
    });

    this.form.get('knowsEndDate')?.valueChanges.subscribe((checked) => {
      const control = this.form.get('endDate');
      if (checked) {
        control?.setValidators(Validators.required);
      } else {
        control?.clearValidators();
        control?.setValue('');
      }
      control?.updateValueAndValidity();
    });

    this.form.get('knowsMarketId')?.valueChanges.subscribe((checked) => {
      const control = this.form.get('marketLocationId');
      if (checked) {
        control?.setValidators(Validators.required);
      } else {
        control?.clearValidators();
        control?.setValue('');
      }
      control?.updateValueAndValidity();
    });

    this.form.get('addLater')?.valueChanges.subscribe((checked) => {
      const meterCtrl = this.form.get('meterNumber');
      const customerCtrl = this.form.get('customerNumber');

      if (checked) {
        meterCtrl?.clearValidators();
        customerCtrl?.clearValidators();
        meterCtrl?.setValue('');
        customerCtrl?.setValue('');
      } else {
        meterCtrl?.setValidators(Validators.required);
        customerCtrl?.setValidators(Validators.required);
      }

      meterCtrl?.updateValueAndValidity();
      customerCtrl?.updateValueAndValidity();
    });
  }

  onBack() {
    this.back.emit();
    console.log('Back');
  }

onNext() {
  if (this.form.valid) {
    console.log('Step5 Data:', this.form.value);
    this.completed.emit(this.form.value); // <-- formani uzatamiz
  } else {
    this.form.markAllAsTouched();
  }
}
}
