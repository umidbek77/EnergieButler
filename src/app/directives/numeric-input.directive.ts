import { Directive, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appNumericInput]'
})
export class NumericInputDirective {
  @Input('appNumericInput') allowedChars: string = '0-9';

  @HostListener('keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    const allowedKeys = ['Backspace', 'Delete', 'ArrowLeft', 'ArrowRight', 'Tab'];
    if (
      allowedKeys.includes(event.key) ||
      event.key.match(new RegExp(`^[${this.allowedChars}]$`))
    ) {
      return;
    }
    event.preventDefault();
  }

  @HostListener('input', ['$event'])
  onInput(event: InputEvent) {
    const input = event.target as HTMLInputElement;
    input.value = input.value.replace(new RegExp(`[^${this.allowedChars}]`, 'g'), '');
  }
}