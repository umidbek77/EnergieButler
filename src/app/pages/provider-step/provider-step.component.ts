import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-provider-step',
  templateUrl: './provider-step.component.html',
  styleUrls: ['./provider-step.component.css'],
  imports: [CommonModule, FormsModule],
})
export class ProviderStepComponent {
  providers: string[] = [
    'badenova Energie GmbH',
    'E.ON Energie',
    'Vattenfall',
    'EnBW',
    'Naturstrom',
  ];

  selectedProvider: string = this.providers[0];
  selectedTariff: string = 'all';

  onNext(): void {
    console.log('Provider:', this.selectedProvider);
    console.log('Tariff type:', this.selectedTariff);
    // keyingi steppga o‘tish lozim
  }

  onBack(): void {
    console.log('Oldingi stepga qaytish');
    // orqaga qaytish lozim
  }

  formValid(): boolean {
    return !!this.selectedProvider && !!this.selectedTariff;
  }
}
