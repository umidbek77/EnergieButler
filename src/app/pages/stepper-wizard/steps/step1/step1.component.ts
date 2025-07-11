import { Component, EventEmitter, Input, Output } from '@angular/core'; // 👈 @Input import qilindi
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-step1',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './step1.component.html',
  styleUrls: ['./step1.component.css'],
})
export class Step1Component {
  @Input() wizardType: 'strom' | 'gas' | 'heizstrom' = 'strom'; // ✅ Qo‘shildi

  @Output() next = new EventEmitter<void>();
  @Output() completed = new EventEmitter<any>();

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      objectType: ['', Validators.required],
      consumption: ['', [Validators.required, Validators.min(1)]],
      tarifType: [''], // ✅ Heizstrom uchun qo‘shildi
    });
  }

  selectObjectType(value: string) {
    this.form.get('objectType')?.setValue(value);
  }

  selectConsumption(value: number) {
    this.form.get('consumption')?.setValue(value);
  }

  isSelectedObject(value: string): boolean {
    return this.form.get('objectType')?.value === value;
  }

  isSelectedConsumption(value: number): boolean {
    return this.form.get('consumption')?.value === value;
  }

  start() {
    if (this.form.valid) {
      console.log('Step1 valid:', this.form.value);
      this.completed.emit(this.form.value);
    } else {
      this.form.markAllAsTouched();
    }
  }
}
