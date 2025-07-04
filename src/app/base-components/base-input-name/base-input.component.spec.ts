import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BaseInputComponent } from './base-input.component';
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
import { By } from '@angular/platform-browser';

describe('BaseInputComponent', () => {
  let component: BaseInputComponent;
  let fixture: ComponentFixture<BaseInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BaseInputComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(BaseInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render input with correct placeholder', () => {
    component.placeholder = 'Ismingizni kiriting';
    fixture.detectChanges();

    const input = fixture.nativeElement.querySelector('input');
    expect(input.placeholder).toBe('Ismingizni kiriting');
  });

  it('should disable the input when disabled is true', () => {
    component.disabled = true;
    fixture.detectChanges();

    const input = fixture.nativeElement.querySelector('input');
    expect(input.disabled).toBeTrue();
  });

  it('should apply type correctly', () => {
    component.type = 'email';
    fixture.detectChanges();

    const input = fixture.nativeElement.querySelector('input');
    expect(input.type).toBe('email');
  });

  it('should allow only letters when inputTypeRestriction is letters', () => {
    component.inputTypeRestriction = 'letters';
    fixture.detectChanges();

    const input = fixture.nativeElement.querySelector('input');
    input.value = '123abc!';
    input.dispatchEvent(new Event('input'));

    fixture.detectChanges();
    expect(component.value).toBe('abc');
  });

  it('should allow only numbers when inputTypeRestriction is numbers', () => {
    component.inputTypeRestriction = 'numbers';
    fixture.detectChanges();

    const input = fixture.nativeElement.querySelector('input');
    input.value = 'abc123!';
    input.dispatchEvent(new Event('input'));

    fixture.detectChanges();
    expect(component.value).toBe('123');
  });
});
