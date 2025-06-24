import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-step8',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './step8.component.html',
  styleUrls: ['./step8.component.css'],
})
export class Step8Component {
  @Input() summaryData: any;
  @Input() signatureUrl: string = '';
  @Output() back = new EventEmitter<void>();
  @Output() confirm = new EventEmitter<void>();

  onBack() {
    this.back.emit();
  }

  onConfirm() {
    this.confirm.emit();
  }
}
