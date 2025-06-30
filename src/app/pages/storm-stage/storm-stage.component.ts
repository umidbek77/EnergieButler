import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { StepsComponent } from "../steps/steps.component";

@Component({
  selector: 'app-storm-stage',
  templateUrl: './storm-stage.component.html',
  styleUrls: ['./storm-stage.component.css'],
  standalone: true,
  imports: [FormsModule, CommonModule, StepsComponent],
})
export class StormStageComponent {
  constructor(private router: Router) {}

  consumption = 2500;
  plz: string = '';
  city: string = '';
  selectedSize: string = '';

  cities: string[] = ['Berlin', 'Hamburg', 'München', 'Köln'];

  consumptionOptions = [
    { size: '1', value: 2000 },
    { size: '2', value: 2500 },
    { size: '3', value: 3500 },
    { size: '4+', value: 4500 },
  ];

  updateConsumptionBySize(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    const size = selectElement.value;

    this.selectedSize = size;
    switch (size) {
      case '1':
        this.consumption = 2000;
        break;
      case '2':
        this.consumption = 2500;
        break;
      case '3':
        this.consumption = 3500;
        break;
      case '4+':
        this.consumption = 4500;
        break;
      default:
        this.consumption = 0;
    }
  }

  canContinue(): boolean {
    return this.consumption > 0 && this.plz.trim() !== '' && this.city !== '';
  }

  goBack() {
    this.router.navigate(['/tariff-selector']);
  }

  goNext() {
    console.log('Weiter clicked', {
      consumption: this.consumption,
      plz: this.plz,
      city: this.city,
    });

    this.router.navigate(['/tariff-compare'], {
      queryParams: {
        plz: this.plz,
        city: this.city,
        consumption: this.consumption,
      },
    });
  }
}
