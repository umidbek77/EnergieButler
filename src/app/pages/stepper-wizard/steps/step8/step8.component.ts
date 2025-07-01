import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-step8',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './step8.component.html',
  styleUrls: ['./step8.component.css'],
})
export class Step8Component implements OnInit {
  @Input() summaryData: any;
  @Input() signatureUrl: string = '';
  @Output() back = new EventEmitter<void>();
  @Output() confirm = new EventEmitter<void>();
  structuredData: any = {};


  constructor(private router: Router) {}

  onBack() {
    this.back.emit();
  }

  onConfirm() {
    // (ixtiyoriy) – ma’lumotlarni localStorage-ga saqlash
    localStorage.setItem('finalData', JSON.stringify(this.summaryData));
    localStorage.setItem('signature', this.signatureUrl);

    // Tasdiqlash xabari
    const confirmed = window.confirm(
      '✅ Ihre Daten wurden erfolgreich übermittelt.\n\nVielen Dank!'
    );

    if (confirmed) {
      // Asosiy sahifaga yo'naltirish
      this.router.navigate(['/main']);
    }
  }
ngOnInit() {
  // Arrayni map qilib, label: parsedValue tarzida objectga o‘tkazamiz
  this.structuredData = this.summaryData.reduce((acc: any, item: any) => {
    acc[item.label] = JSON.parse(item.value);
    return acc;
  }, {});
}


  
}
