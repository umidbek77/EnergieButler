import { Component, Input, forwardRef } from '@angular/core';
import {
  ControlValueAccessor,
  FormsModule,
  NG_VALUE_ACCESSOR
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-base-input-number',
  standalone: true,
  imports: [CommonModule, InputTextModule, FormsModule],
  templateUrl: './base-input-number.component.html',
  styleUrls: ['./base-input-number.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => BaseInputNumberComponent),
      multi: true
    }
  ]
})
export class BaseInputNumberComponent implements ControlValueAccessor {
  @Input() placeholder: string = '';
  @Input() disabled: boolean = false;
  @Input() fontSize: string = '14px';
  @Input() fontWeight: string = 'normal';
  @Input() maxlength: number | null = null;

  value: string = '';
  onChange = (value: string) => {};
  onTouched = () => {};

  writeValue(value: string): void {
    this.value = value || '';
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  onInput(event: Event): void {
    const input = (event.target as HTMLInputElement).value;
    this.value = input;
    this.onChange(this.value);
  }

  restrictKey(event: KeyboardEvent): void {
    const allowedPattern = /[0-9]/;
    if (!allowedPattern.test(event.key)) {
      event.preventDefault();
    }
  }
}
