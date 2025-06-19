import { Component } from '@angular/core';
import { FooterComponent } from "../../components/footer/footer.component";
import { HeaderComponent } from "../../components/header/header.component";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-object-usege-gaswechsel',
  imports: [CommonModule, FormsModule],
  templateUrl: './object-usege-gaswechsel.component.html',
  styleUrl: './object-usege-gaswechsel.component.css'
})
export class ObjectUsegeGaswechselComponent {
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
