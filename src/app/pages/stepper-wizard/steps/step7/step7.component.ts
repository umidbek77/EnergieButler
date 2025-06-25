import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-step7',
  templateUrl: './step7.component.html',
  styleUrls: ['./step7.component.css'],
  standalone: true,
  imports: [FormsModule, CommonModule],
})
export class Step7Component {
  @Output() next = new EventEmitter<void>();
  @Output() back = new EventEmitter<void>();

  drawing = true;

  saveSignature() {
    alert('Unterschrift gespeichert ✅');
  }

  clearSignature() {
    const canvas = document.getElementById('signature') as HTMLCanvasElement;
    const ctx = canvas.getContext('2d');
    if (ctx) ctx.clearRect(0, 0, canvas.width, canvas.height);
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
