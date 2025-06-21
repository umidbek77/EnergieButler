import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TariffSelectorComponent } from '../tariff-selector/tariff-selector.component';
import { ConsumptionStepComponent } from '../consumption-step/consumption-step.component';
import { ProviderStepComponent } from '../provider-step/provider-step.component';

@Component({
  selector: 'app-tariff-wizard',
  standalone: true,
  imports: [
    CommonModule,
    TariffSelectorComponent,
    ConsumptionStepComponent,
    ProviderStepComponent,
  ],
  templateUrl: './tariff-wizard.component.html',
  styleUrls: ['./tariff-wizard.component.css'],
})
export class TariffWizardComponent {
  @Output() close = new EventEmitter<void>();

  currentStep = 1;

  goNext() {
    if (this.currentStep < 3) this.currentStep++;
  }

  goBack() {
    if (this.currentStep > 1) this.currentStep--;
  }

  onClose() {
    this.close.emit();
  }
}
