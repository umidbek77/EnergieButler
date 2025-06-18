import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-object-usage',
  templateUrl: './object-usage.component.html',
  styleUrls: ['./object-usage.component.css'],
  imports: [RouterModule, FormsModule, HeaderComponent, FooterComponent],
})
export class ObjectUsageComponent {
  selectedObjectType: string = 'Wohnung';
  selectedPeople: number = 2;
  annualConsumption: number = 2500;

  setObjectType(type: string) {
    this.selectedObjectType = type;
  }

  setPeople(count: number) {
    this.selectedPeople = count;
  }
}
