import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './pages/main/main.component';
import { AngeboteComponent } from './pages/angebote/angebote.component';
import { WechselservicesComponent } from './pages/wechselservices/wechselservices.component';
import { TariffSelectorComponent } from './pages/tariff-selector/tariff-selector.component';
import { ObjectUsageComponent } from './pages/object-usage/object-usage.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'main', component: MainComponent },
  { path: 'angebote', component: AngeboteComponent },
  { path: 'wechselservice', component: WechselservicesComponent },
  { path: 'tariff-selector', component: TariffSelectorComponent },
  { path: 'object-usege', component: ObjectUsageComponent },
];
