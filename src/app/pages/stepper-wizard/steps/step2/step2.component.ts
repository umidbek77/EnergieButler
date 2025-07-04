import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { BaseInputNumberComponent } from "../../../../base-components/base-input-number/base-input-number.component";
import { Select } from 'primeng/select';
import { FloatLabel } from 'primeng/floatlabel';
import { DropdownModule } from 'primeng/dropdown';

interface SelectItem {
  label: string;
  value: string;
}


@Component({
  selector: 'app-step2',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    BaseInputNumberComponent,
    Select, 
    FloatLabel,
    DropdownModule
],
  templateUrl: './step2.component.html',
  styleUrls: ['./step2.component.css'],
})
export class Step2Component implements OnInit {
  @Output() next = new EventEmitter<void>();
@Output() completed = new EventEmitter<any>();
@Output() back = new EventEmitter<void>();
  form: FormGroup;

providersList: SelectItem[] = [];
citiesList: SelectItem[] = [];



  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.form = this.fb.group({
      plz: ['', Validators.required],
      city: ['', Validators.required],
      provider: ['', Validators.required],
      tariffType: ['all', Validators.required],
    });
  }

  ngOnInit() {
    this.fetchCities();
    this.fetchProviders();
  }

fetchCities() {
  // TODO: Keyinchalik backend orqali yuklanadi
  const fallback = ['Berlin', 'Hamburg', 'München', 'Köln', 'Frankfurt', 'Stuttgart'];
  this.citiesList = fallback.map(city => ({ label: city, value: city }));
}

fetchProviders() {
  // TODO: Keyinchalik backend API chaqiriladi
  const fallback = ['E.ON', 'Vattenfall', 'EnBW'];
  this.providersList = fallback.map(p => ({ label: p, value: p }));
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
    this.completed.emit(this.form.value); // <-- faqat formani uzatadi
  } else {
    this.form.markAllAsTouched();
  }
}

}
