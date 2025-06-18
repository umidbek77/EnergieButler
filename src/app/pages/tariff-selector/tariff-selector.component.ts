import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "../../components/header/header.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { StepsComponent } from "../steps/steps.component";
@Component({
  selector: 'app-tariff-selector',
  templateUrl: './tariff-selector.component.html',
  styleUrls: ['./tariff-selector.component.css'],
  imports: [CommonModule, HeaderComponent, FooterComponent, StepsComponent],
})
export class TariffSelectorComponent {
  selectedEnergy: string | null = null;
  selectedProperty: string | null = null;

  selectEnergy(option: string): void {
    this.selectedEnergy = option;

    // Agar "Heizstrom" tanlansa va pastki "Gewerbe" tanlangan bo‘lsa, uni tozalaymiz
    if (option === 'Heizstrom' && this.selectedProperty === 'Gewerbe') {
      this.selectedProperty = null;
    }
  }

  selectProperty(option: string): void {
    this.selectedProperty = option;
  }

  submit(): void {
    if (this.selectedEnergy && this.selectedProperty) {
      console.log('Tanlangan energiya:', this.selectedEnergy);
      console.log('Tanlangan obyekt:', this.selectedProperty);
      // Keyingi qadamlar yoki API chaqiruvlar shu yerda bo‘ladi
    } else {
      console.warn('Iltimos, barcha tanlovlarni bajaring.');
    }
  }
}
