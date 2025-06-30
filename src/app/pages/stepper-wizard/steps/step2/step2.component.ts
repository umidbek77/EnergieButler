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
  ],
  templateUrl: './step2.component.html',
  styleUrls: ['./step2.component.css'],
})
export class Step2Component implements OnInit {
  @Output() next = new EventEmitter<void>();
  @Output() back = new EventEmitter<void>();

  form: FormGroup;

  providersList: string[] = [];
  citiesList: string[] = [];

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
    this.http
      .get<any>(
        'https://countriesnow.space/api/v0.1/countries/cities/q?country=Germany'
      )
      .subscribe({
        next: (res) => {
          this.citiesList = res.data || ['Berlin', 'Hamburg', 'München'];
        },
        error: (err) => {
          console.error('City API error:', err);
          this.citiesList = ['Berlin', 'Hamburg', 'München']; // fallback
        },
      });
  }

  fetchProviders() {
    // ❗ Bu yerda siz o'zingizning provider API manzilingizni ko'rsating
    this.http
      .get<string[]>('https://mocki.io/v1/73085cb0-11b5-40d5-a2b1-9ce05bd2890e') // misol uchun mock API
      .subscribe({
        next: (data) => {
          this.providersList =
            data.length > 0 ? data : ['E.ON', 'Vattenfall', 'EnBW'];
        },
        error: (err) => {
          console.error('Provider API error:', err);
          this.providersList = ['E.ON', 'Vattenfall', 'EnBW']; // fallback
        },
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
