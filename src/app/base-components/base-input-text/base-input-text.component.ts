import { Component, Input, forwardRef } from '@angular/core';
import {
  ControlValueAccessor,
  FormsModule,
  NG_VALUE_ACCESSOR
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-base-input-text',
  standalone: true,
  imports: [CommonModule, InputTextModule, FormsModule],
  templateUrl: './base-input-text.component.html',
  styleUrls: ['./base-input-text.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => BaseInputTextComponent),
      multi: true
    }
  ]
})
export class BaseInputTextComponent implements ControlValueAccessor {
  @Input() placeholder: string = '';
  @Input() disabled: boolean = false;

  value: string = '';
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

  onInput(val: string): void {
    this.value = val;
    this.onChange(val);
  }
}
