import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseInputTextComponent } from './base-input-text.component';

describe('BaseInputTextComponent', () => {
  let component: BaseInputTextComponent;
  let fixture: ComponentFixture<BaseInputTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BaseInputTextComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BaseInputTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
