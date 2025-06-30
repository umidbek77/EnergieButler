import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-angebote',
  imports: [ CommonModule],
  templateUrl: './angebote.component.html',
  styleUrl: './angebote.component.css',
})
export class AngeboteComponent implements OnInit {
  data: any;
  signature: string = '';

ngOnInit() {
  const data = localStorage.getItem('finalData');
  const signature = localStorage.getItem('signature');

  this.data = data ? JSON.parse(data) : null;
  this.signature = signature || '';

  console.log('Keldi:', this.data);
  console.log('Signature:', this.signature);
}

isJson(value: string): boolean {
  try {
    JSON.parse(value);
    return true;
  } catch {
    return false;
  }
}

parseValue(value: string): any {
  try {
    return JSON.parse(value);
  } catch {
    return value;
  }
}


}
