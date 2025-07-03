import { Directive, HostListener, ElementRef, Renderer2, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[appDateMask]'
})
export class DateMaskDirective {
  @Output() dateFormatted = new EventEmitter<Date>();

  constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ) {}

  @HostListener('input', ['$event'])
  onInput(event: Event) {
    let value = this.el.nativeElement.value.replace(/\D/g, '');
    let formattedValue = '';

    if (value.length > 0) {
      formattedValue = value.slice(0, 2);
      if (value.length > 2) {
        formattedValue += '.' + value.slice(2, 4);
        if (value.length > 4) {
          formattedValue += '.' + value.slice(4, 8);
        }
      }
    }

    this.renderer.setProperty(this.el.nativeElement, 'value', formattedValue);

    if (value.length === 8) {
      const day = parseInt(value.slice(0, 2), 10);
      const month = parseInt(value.slice(2, 4), 10) - 1;
      const year = parseInt(value.slice(4, 8), 10);
      const date = new Date(year, month, day);
      if (date.toString() !== 'Invalid Date') {
        this.dateFormatted.emit(date);
      }
    }
  }
}