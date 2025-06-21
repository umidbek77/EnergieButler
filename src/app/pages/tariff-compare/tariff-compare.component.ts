import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-tariff-compare',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './tariff-compare.component.html',
  styleUrls: ['./tariff-compare.component.css'],
})
export class TariffCompareComponent {
  providers: string[] = [
    '123energie - eine Marke der Pfalzwerke AG',
    'E.ON Energie Deutschland',
    'Vattenfall Europe',
    'LichtBlick SE',
  ];

  selectedProvider: string = this.providers[0];
  selectedTariff: string = 'alle';

  constructor(private router: Router) {}

  goBack() {
    this.router.navigate(['/storm-stage']);
  }

  goNext() {
    // kerakli sahifaga yo‘naltirish
    this.router.navigate(['/offer-ready']);
  }
}
