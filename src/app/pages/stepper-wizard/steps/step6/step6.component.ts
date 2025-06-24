import { Component, EventEmitter, Output } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-step6',
  templateUrl: './step6.component.html',
  styleUrls: ['./step6.component.css'],
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
})
export class Step6Component {
  form: FormGroup;
  showContactForm = false;

  @Output() next = new EventEmitter<any>();
  @Output() back = new EventEmitter<void>();

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      iban: [
        '',
        [
          Validators.required,
          Validators.pattern(
            /^DE\d{2}\s?\d{4}\s?\d{4}\s?\d{4}\s?\d{4}\s?\d{0,2}$/
          ),
        ],
      ],
      showContact: [false],

      salutation: [''],
      firstName: [''],
      lastName: [''],
      birthDate: [''],
      phone: [''],
      plz: [''],
      city: [''],
      street: [''],
      houseNumber: [''],
    });

    this.form.get('showContact')?.valueChanges.subscribe((checked) => {
      this.showContactForm = checked;
    });
  }

  onNext() {
    if (this.form.valid) {
      this.next.emit(this.form.value);
    } else {
      this.form.markAllAsTouched();
    }
  }

  onBack() {
    this.back.emit(); // orqaga qaytish signali
  }
}
