import { Routes } from '@angular/router';

export const STEP_ROUTER: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./stepper-wizard.component').then(
        (m) => m.StepperWizardComponent
      ),
  },
];
