import { Component } from '@angular/core';
import { HeaderComponent } from "../components/header/header.component";
import { HeroComponent } from "../components/hero/hero.component";
import { SavingsOverviewComponent } from "../components/savings-overview/savings-overview.component";
import { EnergySavingStepsComponent } from "../components/energy-saving-steps/energy-saving-steps.component";
import { FaqSectionComponent } from "../components/faq-section/faq-section.component";
import { WarumEnergiebutlerComponent } from "../components/warum-energiebutler/warum-energiebutler.component";
import { CtaSectionComponent } from "../components/cta-section/cta-section.component";
import { FooterComponent } from "../components/footer/footer.component";

@Component({
  selector: 'app-home',
  imports: [HeaderComponent, HeroComponent, SavingsOverviewComponent, EnergySavingStepsComponent, FaqSectionComponent, WarumEnergiebutlerComponent, CtaSectionComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
