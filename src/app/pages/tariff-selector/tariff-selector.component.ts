import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { StepsComponent } from '../steps/steps.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tariff-selector',
  templateUrl: './tariff-selector.component.html',
  styleUrls: ['./tariff-selector.component.css'],
  imports: [StepsComponent, CommonModule],
})
export class TariffSelectorComponent implements OnInit {
  selectedEnergy: string | null = null;
  selectedProperty: string | null = null;

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      const energyParam = params['energy'];
      const propertyParam = params['property'];

      if (energyParam) this.selectEnergy(energyParam);
      if (propertyParam) this.selectProperty(propertyParam);
    });
  }

  selectEnergy(option: string): void {
    this.selectedEnergy = option;

    // Heizstrom tanlansa va Gewerbe tanlangan bo‘lsa — tozalansin
    if (option === 'Heizstrom' && this.selectedProperty === 'Gewerbe') {
      this.selectedProperty = null;
    }
  }

  selectProperty(option: string): void {
    this.selectedProperty = option;
  }

  submit(): void {
    if (!this.selectedEnergy || !this.selectedProperty) {
      alert('Iltimos, barcha tanlovlarni bajaring.');
      return;
    }

    // Logikaga asoslangan yo'nalish
    if (
      this.selectedEnergy === 'Strom' &&
      this.selectedProperty === 'Wohnung'
    ) {
      this.router.navigate(['/storm-stage']);
    } else if (
      this.selectedEnergy === 'Gas' &&
      this.selectedProperty === 'Wohnung'
    ) {
      this.router.navigate(['/consumption-stage']);
    } else if (
      this.selectedEnergy === 'Heizstrom' &&
      this.selectedProperty === 'Haus'
    ) {
      this.router.navigate(['/heizstrom-haus-stage']);
    } else if (
      this.selectedEnergy === 'Strom' &&
      this.selectedProperty === 'Gewerbe'
    ) {
      this.router.navigate(['/strom-gewerbe-stage']);
    } else {
      // Fallback sahifa
      this.router.navigate(['/consumption-stage']);
    }
  }
}
