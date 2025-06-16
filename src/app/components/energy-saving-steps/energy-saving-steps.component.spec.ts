import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnergySavingStepsComponent } from './energy-saving-steps.component';

describe('EnergySavingStepsComponent', () => {
  let component: EnergySavingStepsComponent;
  let fixture: ComponentFixture<EnergySavingStepsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnergySavingStepsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnergySavingStepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
