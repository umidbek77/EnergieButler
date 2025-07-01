import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-angebote',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './angebote.component.html',
  styleUrl: './angebote.component.css',
})
export class AngeboteComponent implements OnInit {
  summaryArray: { label: string; value: any }[] = [];
  signature: string = '';

  ngOnInit() {
    const data = localStorage.getItem('finalData');
    const signature = localStorage.getItem('signature');

    if (data) {
      try {
        const raw = JSON.parse(data);
        this.summaryArray = raw.map((item: any) => ({
          label: item.label,
          value: this.tryParse(item.value),
        }));
      } catch (e) {
        console.error('❌ Maʼlumotni JSON.parse qilishda xatolik:', e);
      }
    }

    this.signature = signature || '';
  }

  tryParse(value: any): any {
    if (typeof value === 'string') {
      try {
        return JSON.parse(value);
      } catch {
        return value;
      }
    }
    return value;
  }
}
