import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'base-button',
  imports: [CommonModule],
  templateUrl: './base-button.component.html',
  styleUrl: './base-button.component.css'
})
export class BaseButtonComponent {
    @Input() text: string = 'Button';
    @Input() type: 'button' | 'submit' = 'button'
    @Input() disabled: boolean = false;
    @Input() size: 'small' | 'medium' | 'large' = 'medium'
    @Input() color: 'green' | 'white' = 'green'
    @Input() icon?: string;
    @Input() iconPosition: 'left' | 'right' ='left'
    @Input() variant: 'filled' | 'outline' | 'soft' = 'soft';
    @Input() fontWeight: 'normal' | 'bold' = 'normal';
    @Input() theme: 'default' | 'primary' = 'default';
}