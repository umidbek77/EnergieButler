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

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      switchDateOption: ['fastest', Validators.required],
      knowsEndDate: [false],
      endDate: [''],
      meterNumber: [''],
      customerNumber: [''],
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
      }
      control?.updateValueAndValidity();
    });

    this.form.get('knowsMarketId')?.valueChanges.subscribe((checked) => {
      const control = this.form.get('marketLocationId');
      if (checked) {
        control?.setValidators(Validators.required);
      } else {
        control?.clearValidators();
      }
      control?.updateValueAndValidity();
    });
  }

  onBack() {
    this.back.emit();
    console.log('Back');
  }

  onNext() {
    if (this.form.valid) {
      this.next.emit(this.form.value); // formani parentga yuboramiz
    } else {
      this.form.markAllAsTouched(); // xatoliklar ko‘rsatiladi
    }
  }
}
