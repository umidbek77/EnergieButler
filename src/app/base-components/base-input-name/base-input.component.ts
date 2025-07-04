import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-base-input-name',
  standalone: true,
  imports: [CommonModule, InputTextModule],
  templateUrl: './base-input.component.html',
  styleUrls: ['./base-input.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => BaseInputNameComponent),
      multi: true
    }
  ]
})
export class BaseInputNameComponent implements ControlValueAccessor {
  @Input() placeholder = '';
  @Input() disabled = false;

  value = '';
  onChange = (val: string) => {};
  onTouched = () => {};

  writeValue(val: string): void {
    this.value = val || '';
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
  this.value = (event.target as HTMLInputElement).value;
  this.onChange(this.value);
}

restrictKey(event: KeyboardEvent): void {
  const allowedPattern = /[a-zA-ZäöüÄÖÜß\s]/;
  if (!allowedPattern.test(event.key)) {
    event.preventDefault();
  }
}

}
