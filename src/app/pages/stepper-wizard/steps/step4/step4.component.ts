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
  @Output() completed = new EventEmitter<any>();
@Output() back = new EventEmitter<void>();

  form: FormGroup;

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

    // Dastlab billing formni disable qilib qo‘yamiz
    this.billingForm.disable();

    // Checkbox holatiga qarab billing formni yoqamiz yoki o‘chiramiz
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
    this.completed.emit(this.form.value); // <-- Ma'lumotni uzatamiz
  } else {
    this.form.markAllAsTouched();
  }
}

  onBack(): void {
    this.back.emit();
  }
}
