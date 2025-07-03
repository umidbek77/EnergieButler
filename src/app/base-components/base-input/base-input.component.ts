import { Component, Input, forwardRef } from '@angular/core';
import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR
} from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-base-input',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './base-input.component.html',
  styleUrls: ['./base-input.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => BaseInputComponent),
      multi: true
    }
  ]
})
export class BaseInputComponent implements ControlValueAccessor {
  @Input() placeholder: string = '';
  @Input() type: string = 'text';
  @Input() fontSize: string = '14px';
  @Input() fontWeight: string = 'normal';
  @Input() disabled: boolean = false;
  @Input() inputTypeRestriction: 'letters' | 'numbers' | 'any' = 'any';


  value: string = '';

  onChange: (value: string) => void = () => {};
  onTouched: () => void = () => {};

  writeValue(value: string): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

handleInput(event: Event) {
  let val = (event.target as HTMLInputElement).value;

  if (this.inputTypeRestriction === 'letters') {
    val = val.replace(/[^a-zA-ZäöüÄÖÜß\s]/g, '');
  } else if (this.inputTypeRestriction === 'numbers') {
    val = val.replace(/[^0-9]/g, '');
  }

  (event.target as HTMLInputElement).value = val;
  this.value = val;
  this.onChange(val);
}
  
}
