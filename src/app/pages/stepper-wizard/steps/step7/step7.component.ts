import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
  signal,
  AfterViewInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-step7',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './step7.component.html',
  styleUrls: ['./step7.component.css'],
})
export class Step7Component implements AfterViewInit {
  @Output() back = new EventEmitter<void>();
  @Output() start = new EventEmitter<void>();

  @ViewChild('canvas', { static: false })
  signaturePad!: ElementRef<HTMLCanvasElement>;

  signatureType = signal<'draw' | 'auto'>('draw');
  signatureSaved = signal(false);

  ngAfterViewInit(): void {
    if (this.signaturePad && this.signatureType() === 'draw') {
      this.clearCanvas();
      this.setupCanvasEvents();
    }
  }

  private setupCanvasEvents(): void {
    const canvas = this.signaturePad.nativeElement;
    const ctx = canvas.getContext('2d');
    let drawing = false;

    if (!ctx) return;

    const startDrawing = (e: MouseEvent | TouchEvent) => {
      drawing = true;
      ctx.beginPath();
      ctx.moveTo(...this.getPosition(e));
    };

    const draw = (e: MouseEvent | TouchEvent) => {
      if (!drawing) return;
      ctx.lineTo(...this.getPosition(e));
      ctx.stroke();
    };

    const stopDrawing = () => {
      drawing = false;
    };

    canvas.addEventListener('mousedown', startDrawing);
    canvas.addEventListener('mousemove', draw);
    canvas.addEventListener('mouseup', stopDrawing);
    canvas.addEventListener('mouseout', stopDrawing);

    canvas.addEventListener('touchstart', startDrawing);
    canvas.addEventListener('touchmove', draw);
    canvas.addEventListener('touchend', stopDrawing);
  }

  private getPosition(e: MouseEvent | TouchEvent): [number, number] {
    const canvas = this.signaturePad.nativeElement;
    const rect = canvas.getBoundingClientRect();
    if (e instanceof MouseEvent) {
      return [e.clientX - rect.left, e.clientY - rect.top];
    } else {
      const touch = e.touches[0];
      return [touch.clientX - rect.left, touch.clientY - rect.top];
    }
  }

  clearCanvas(): void {
    const canvas = this.signaturePad.nativeElement;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
    this.signatureSaved.set(false);
  }

  saveSignature(): void {
    this.signatureSaved.set(true);
  }

  onBack(): void {
    this.back.emit();
  }

  onStart(): void {
    if (this.signatureType() === 'draw' && !this.signatureSaved()) return;
    this.start.emit();
  }

  setSignatureType(type: 'draw' | 'auto'): void {
    this.signatureType.set(type);
  }

  isDrawSelected(): boolean {
    return this.signatureType() === 'draw';
  }

  isAutoSelected(): boolean {
    return this.signatureType() === 'auto';
  }

  isDisabled(): boolean {
    return this.signatureType() === 'draw' && !this.signatureSaved();
  }
}
