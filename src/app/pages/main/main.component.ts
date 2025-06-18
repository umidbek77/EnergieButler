import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { StepsComponent } from '../../pages/steps/steps.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-main',
  imports: [HeaderComponent, StepsComponent, FooterComponent, RouterModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
})
export class MainComponent {}
