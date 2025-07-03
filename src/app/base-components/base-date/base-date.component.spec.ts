import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseDateComponent } from './base-date.component';

describe('BaseDateComponent', () => {
  let component: BaseDateComponent;
  let fixture: ComponentFixture<BaseDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BaseDateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BaseDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
