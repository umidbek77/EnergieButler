import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlContainer, FormGroupDirective, ReactiveFormsModule } from '@angular/forms';

import { Select } from 'primeng/select';
import { FloatLabel } from 'primeng/floatlabel';
import { CommonModule } from '@angular/common';

import { ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'app-base-select',
  imports: [ Select, FloatLabel, ReactiveFormsModule, CommonModule],
  templateUrl: './base-select.component.html',
  styleUrl: './base-select.component.css',
   viewProviders: [{ provide: ControlContainer, useExisting: FormGroupDirective }],
    providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => BaseSelectComponent),
      multi: true,
    },
  ],
})
export class BaseSelectComponent implements OnInit {
  
  @Input() options: any[] = [];
  @Input() optionLabel: string = '';
  @Input() formControlName!: string;
  @Input() placeholder: string = '';
  @Input() editable: boolean = false;
  @Input() inputId: string = '';
  @Input() labelText: string = '';
  @Input() filter:boolean=false;
  @Input() fontSize: string = '16px';
  @Input() labelFontSize: string = '16px';
  @Input() styleClass: string = '';
  @Input() dropdownFontSize: string = '16px';


    value: any;

  onChange: any = () => {};
  onTouched: any = () => {};

  writeValue(value: any): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    // qo‘shmoqchi bo‘lsangiz, bu yerda `disabled` ishlov beriladi
  }

  onValueChange(event: any) {
    this.value = event;
    this.onChange(event);
    this.onTouched();
  }

  ngOnInit() {
  document.documentElement.style.setProperty('--dropdown-font-size', this.dropdownFontSize);
}


}
