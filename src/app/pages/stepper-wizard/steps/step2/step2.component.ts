import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-step2',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
  ],
  templateUrl: './step2.component.html',
  styleUrls: ['./step2.component.css'],
})
export class Step2Component {
  @Output() next = new EventEmitter<void>();
  @Output() back = new EventEmitter<void>();

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      plz: ['', Validators.required],
      city: ['', Validators.required],
      provider: [''],
      tariffType: ['all', Validators.required],
    });
  }

  selectTariffType(type: 'all' | 'eco') {
    this.form.get('tariffType')?.setValue(type);
  }

  isSelectedTariff(type: 'all' | 'eco'): boolean {
    return this.form.get('tariffType')?.value === type;
  }

  goNext() {
    if (this.form.valid) {
      console.log('Step2 Data:', this.form.value);
      this.next.emit();
    } else {
      this.form.markAllAsTouched();
    }
  }
}
