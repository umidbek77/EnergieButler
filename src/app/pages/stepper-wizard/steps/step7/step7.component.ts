import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-step7',
  standalone: true,
  imports: [FormsModule, CommonModule, ToastModule],
  templateUrl: './step7.component.html',
  styleUrls: ['./step7.component.css'],
  providers: [MessageService]
})
export class Step7Component {
  @Output() next = new EventEmitter<{ signed: boolean; type: string; image?: string }>();
  @Output() back = new EventEmitter<void>();

  drawing = true;
  isSigned = false;


  constructor(private messageService: MessageService) {}
saveSignature() {
  this.isSigned = true;

  this.messageService.add({
    severity: 'success',
    summary: 'Erfolgreich',
    detail: 'Unterschrift gespeichert',
    life: 3000
  });
}

  clearSignature() {
    const canvas = document.getElementById('signature') as HTMLCanvasElement;
    const ctx = canvas.getContext('2d');
    if (ctx) ctx.clearRect(0, 0, canvas.width, canvas.height);
    this.isSigned = false;
  }

  isSignatureValid(): boolean {
    return this.drawing ? this.isSigned : true;
  }

onNext() {
  if (this.drawing && !this.isSigned) {
    this.saveSignature();
  }

  let image: string | undefined;

  if (this.drawing) {
    const canvas = document.getElementById('signature') as HTMLCanvasElement;
    if (canvas) {
      image = canvas.toDataURL('image/png');
      console.log('🖼️ Signature image:', image);
    } else {
      console.error('❌ Canvas not found when trying to get image');
    }
  }

  this.next.emit({
    signed: this.isSigned,
    type: this.drawing ? 'drawn' : 'auto',
    image,
  });
}


  ngAfterViewInit() {
    const canvas = document.getElementById('signature') as HTMLCanvasElement;
    const ctx = canvas.getContext('2d');
    if (!canvas || !ctx) return;

    let drawing = false;

    canvas.addEventListener('mousedown', () => (drawing = true));
    canvas.addEventListener('mouseup', () => {
      drawing = false;
      ctx.beginPath();
    });
    canvas.addEventListener('mousemove', (e) => {
      if (!drawing) return;
      const rect = canvas.getBoundingClientRect();
      ctx.lineWidth = 2;
      ctx.lineCap = 'round';
      ctx.strokeStyle = '#333';
      ctx.lineTo(e.clientX - rect.left, e.clientY - rect.top);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(e.clientX - rect.left, e.clientY - rect.top);
    });
  }
}
