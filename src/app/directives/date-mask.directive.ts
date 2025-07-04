import { Directive, HostListener, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDateMask]'
})
export class DateMaskDirective {
  constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ) {}

  @HostListener('input', ['$event'])
  onInput() {
    const input = this.el.nativeElement as HTMLInputElement;

    if (!input || !input.value) return;

    let value = input.value.replace(/\D/g, '');
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

    this.renderer.setProperty(input, 'value', formattedValue);
  }
}