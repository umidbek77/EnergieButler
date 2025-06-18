import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
  imports:[CommonModule]
})
export class ModalComponent implements OnDestroy, OnInit {
  @Output() close = new EventEmitter<void>();

   step: number = 1; 


     ngOnInit(): void {
    document.body.classList.add('modal-open');
  }

  ngOnDestroy(): void {
    document.body.classList.remove('modal-open');
  }

  closeModal() {
    this.close.emit();
  }

 goToStep2(method: string) {
  if (method === 'manual') {
    this.step = 2;
  } else if (method === 'ki') {
    this.step = 3;
  }
}


    backToStep1() {
    this.step = 1;
  }
}

