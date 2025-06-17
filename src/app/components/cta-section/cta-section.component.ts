import { Component } from '@angular/core';
import { ModalComponent } from "../../modal/modal.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cta-section',
  imports: [ModalComponent, CommonModule],
  templateUrl: './cta-section.component.html',
  styleUrl: './cta-section.component.css'
})
export class CtaSectionComponent {

      showModal = false;

  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }
}
