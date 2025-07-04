import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseInputNumberComponent } from './base-input-number.component';

describe('BaseInputNumberComponent', () => {
  let component: BaseInputNumberComponent;
  let fixture: ComponentFixture<BaseInputNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BaseInputNumberComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BaseInputNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
