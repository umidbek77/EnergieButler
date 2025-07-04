import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';

import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';


@Component({
  selector: 'app-step8',
  standalone: true,
  imports: [CommonModule, ConfirmDialogModule, ToastModule, ButtonModule ],
  templateUrl: './step8.component.html',
  styleUrls: ['./step8.component.css'],
  providers: [ConfirmationService, MessageService]
})
export class Step8Component implements OnInit {
  @Input() summaryData: any;
  @Input() signatureUrl: string = '';
  @Output() back = new EventEmitter<void>();
  @Output() confirm = new EventEmitter<void>();
  structuredData: any = {};


  constructor(private router: Router, private confirmationService: ConfirmationService, private messageService: MessageService,) {}

  onBack() {
    this.back.emit();
  }

  onConfirm() {
  this.confirmationService.confirm({
    message: 'Ihre Daten wurden erfolgreich übermittelt.\n\nVielen Dank!',
    header: 'Bestätigung',
    icon: 'pi pi-check-circle',
    acceptLabel: 'Weiter',
    rejectLabel: 'Abbrechen',
    acceptButtonStyleClass: 'p-button-success', 
  rejectButtonStyleClass: 'p-button-danger',

 accept: () => {
  localStorage.setItem('finalData', JSON.stringify(this.summaryData));
  localStorage.setItem('signature', this.signatureUrl);

  this.messageService.add({
    severity: 'success',
    summary: 'Gespeichert',
    detail: 'Ihre Daten wurden gespeichert.',
    life: 2000  
  });

  // Sahifani o‘zgartirishni 2 sekundga kechiktiramiz
  setTimeout(() => {
    this.router.navigate(['/main']);
  }, 2000);
}
,
    reject: () => {
      this.messageService.add({
        severity: 'info',
        summary: 'Abgebrochen',
        detail: 'Sie haben den Vorgang abgebrochen.',
        life: 3000
      });
    }
  });
}
ngOnInit() {
  // Arrayni map qilib, label: parsedValue tarzida objectga o‘tkazamiz
  this.structuredData = this.summaryData.reduce((acc: any, item: any) => {
    acc[item.label] = JSON.parse(item.value);
    return acc;
  }, {});
}


  
}
