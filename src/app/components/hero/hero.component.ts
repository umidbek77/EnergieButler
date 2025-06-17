import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent implements OnInit {
  fromAmount: number = 0;
  toAmount: number = 0;
  customersCount: number = 0;

  ngOnInit(): void {
    this.animateValue('fromAmount', 100, 237, 100); // 2 sekundda 0 dan 237 gacha
    this.animateValue('toAmount', 1600, 1800, 30); // 2.5 sekundda 0 dan 1800 gacha
    this.animateValue('customersCount', 14850, 15000, 100);
  }

  animateValue(
    prop: 'fromAmount' | 'toAmount' | 'customersCount',
    start: number,
    end: number,
    duration: number
  ) {
    const range = end - start;
    let current = start;
    const increment = end > start ? 1 : -1;
    const stepTime = Math.abs(Math.floor(duration / range));

    const timer = setInterval(() => {
      current += increment;
      this[prop] = current;

      if (current == end) {
        clearInterval(timer);
      }
    }, stepTime);
  }
}
