import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './pages/main/main.component';
import { AngeboteComponent } from './pages/angebote/angebote.component';
import { WechselservicesComponent } from './pages/wechselservices/wechselservices.component';
import { TariffSelectorComponent } from './pages/tariff-selector/tariff-selector.component';
import { ObjectUsageComponent } from './pages/object-usage/object-usage.component';
import { ConsumptionStepComponent } from './pages/consumption-step/consumption-step.component';
import { ObjectUsegeGaswechselComponent } from './pages/object-usege-gaswechsel/object-usege-gaswechsel.component';
import { ObjectUsegeHeizstromwechselComponent } from './pages/object-usege-heizstromwechsel/object-usege-heizstromwechsel.component';
import { ProviderStepComponent } from './pages/provider-step/provider-step.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'main', component: MainComponent },
  { path: 'angebote', component: AngeboteComponent },
  { path: 'wechselservice', component: WechselservicesComponent },
  { path: 'tariff-selector', component: TariffSelectorComponent },
  { path: 'object-usege', component: ObjectUsageComponent },
  { path: 'consumption-stage', component: ConsumptionStepComponent },
  { path: 'gaswechsel', component: ObjectUsegeGaswechselComponent },
  { path: 'heizstromwechsel', component: ObjectUsegeHeizstromwechselComponent },
  { path: 'provider-step', component: ProviderStepComponent },
];
