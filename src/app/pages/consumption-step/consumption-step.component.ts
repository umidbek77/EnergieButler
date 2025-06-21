import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-consumption-step',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './consumption-step.component.html',
  styleUrls: ['./consumption-step.component.css'],
})
export class ConsumptionStepComponent {
  consumptionOptions = [
    { label: '50m²', size: 50, value: 5000 },
    { label: '100m²', size: 100, value: 12000 },
    { label: '150m²', size: 150, value: 18000 },
    { label: '180m²', size: 180, value: 20000 },
  ];

  selectedSize: number = 100;
  consumptionValue: number = 12000;

  plz: string = '';
  ort: string = '';
  ortOptions = ['Berlin', 'Hamburg', 'München'];

  constructor(private router: Router) {}

  selectSize(size: number, value: number) {
    this.selectedSize = size;
    this.consumptionValue = value;
  }

  formValid(): boolean {
    return this.plz.length === 5 && this.ort !== '';
  }

  onNext() {
    if (this.formValid()) {
      this.router.navigate(['/provider-step']);
    }
  }

  onBack() {
    this.router.navigate(['/consumption-stage']);

    console.log('Back pressed');
  }
}
