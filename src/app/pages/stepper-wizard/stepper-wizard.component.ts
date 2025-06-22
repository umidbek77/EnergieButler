import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatStepperModule } from '@angular/material/stepper';
import { Step1Component } from './steps/step1/step1.component';
import { Step2Component } from './steps/step2/step2.component';
import { Step3Component } from './steps/step3/step3.component';
import { Step4Component } from './steps/step4/step4.component';
import { Step5Component } from './steps/step5/step5.component';
import { Step6Component } from './steps/step6/step6.component';
import { Step7Component } from './steps/step7/step7.component';
import { Step8Component } from './steps/step8/step8.component';

@Component({
  selector: 'app-stepper-wizard',
  templateUrl: './stepper-wizard.component.html',
  styleUrls: ['./stepper-wizard.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    MatStepperModule,
    MatButtonModule,
    Step1Component,
    Step2Component,
    Step3Component,
    Step4Component,
    Step5Component,
    Step6Component,
    Step7Component,
    Step8Component,
  ],
})
export class StepperWizardComponent {
  currentStepIndex: number = 0;

  stepLabels: string[] = [
    '1. Objektart und Verbrauch',
    '2. Anschluss',
    '3. Vertragspartner',
    '4. Zahlungsart',
    '5. Identifikation',
    '6. Boni',
    '7. Zusammenfassung',
    '8. Abschluss',
  ];

  nextStep() {
    if (this.currentStepIndex < this.stepLabels.length - 1) {
      this.currentStepIndex++;
    }
  }

  prevStep() {
    if (this.currentStepIndex > 0) {
      this.currentStepIndex--;
    }
  }
}
