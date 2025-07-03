import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
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
export class StepperWizardComponent implements OnInit {
  currentStepIndex: number = 0;

  stepLabels: string[] = [
    'Objektart und Verbrauch',
    'Ihr Anschluss',
    'Aktueller Vertragsinhaber',
    'Lieferstelle',
    'Wechseltermin/ Kundendaten',
    'Bankdaten',
    'Unterschrift',
    'Daten überprüfen',
  ];

  formData: any = {};
  signatureImage: string = '';

  // 🔥 wizard turi (strom, gas, heizstrom)
  wizardType: 'strom' | 'gas' | 'heizstrom' = 'strom';

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    // LocalStorage imzoni olish
    const savedSignature = localStorage.getItem('signature');
    if (savedSignature) {
      this.signatureImage = savedSignature;
    }

    // 🔄 queryParams orqali wizard turi olish
    this.route.queryParams.subscribe((params) => {
      const paramType = params['type'] as 'strom' | 'gas' | 'heizstrom';
      if (paramType === 'gas' || paramType === 'heizstrom') {
        this.wizardType = paramType;
      } else {
        this.wizardType = 'strom';
      }
      console.log('🧠 wizardType:', this.wizardType); // test uchun
    });
  }

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

  saveStep1Data(data: any) {
    this.formData.step1 = data;
    console.log('✅ Step 1 data saved:', this.formData.step1);
  }

  saveStep2Data(data: any) {
    this.formData.step2 = data;
  }

  saveStep3Data(data: any) {
    this.formData.step3 = data;
  }

  saveStep4Data(data: any) {
    this.formData.step4 = data;
  }

  saveStep5Data(data: any) {
    this.formData.step5 = data;
  }

  handleStep5Next(data: any) {
    this.saveStep5Data(data);
    this.nextStep();
  }

  saveStep6Data(data: any) {
    this.formData.step6 = data;
  }

  saveSignature(data: { signed: boolean; type: string; image?: string }) {
    this.formData.signature = {
      signed: data.signed,
      type: data.type,
    };
    this.signatureImage = data.image || '';
    console.log('📦 signatureImage saved:', this.signatureImage);
  }

  finishWizard() {
    console.log('All steps complete:', this.formData);
  }

  get summaryArray() {
    return Object.entries(this.formData).map(([key, value]) => ({
      label: key,
      value: JSON.stringify(value),
    }));
  }

  goToAngebote() {
    localStorage.setItem('finalData', JSON.stringify(this.formData));
    localStorage.setItem('signature', this.signatureImage);
    this.router.navigate(['/angebote']);
  }
}
