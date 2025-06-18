import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumptionStepComponent } from './consumption-step.component';

describe('ConsumptionStepComponent', () => {
  let component: ConsumptionStepComponent;
  let fixture: ComponentFixture<ConsumptionStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsumptionStepComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsumptionStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
