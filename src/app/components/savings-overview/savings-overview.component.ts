import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface SavingsData {
  energyType: string;
  householdOfFour: string;
  singleHousehold: string;
}

@Component({
  selector: 'app-savings-overview',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './savings-overview.component.html',
  styleUrls: ['./savings-overview.component.css'],
})
export class SavingsOverviewComponent {
  tableHeader = {
    title: 'Durchschnittliche Ersparnis pro Jahr',
    subtitle: 'Basierend auf realen Wechseldaten aus 2024',
  };

  savings: SavingsData[] = [
    {
      energyType: 'Strom',
      householdOfFour: '820 - 918 €',
      singleHousehold: '237 - 277 €',
    },
    {
      energyType: 'Gas',
      householdOfFour: 'ca. 1.000 €',
      singleHousehold: 'ca. 255 €',
    },
    {
      energyType: 'Strom + Gas',
      householdOfFour: '1.800 €+',
      singleHousehold: '490 €+',
    },
  ];
}
