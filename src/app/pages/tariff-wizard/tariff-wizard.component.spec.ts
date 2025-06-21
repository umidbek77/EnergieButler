import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TariffWizardComponent } from './tariff-wizard.component';

describe('TariffWizardComponent', () => {
  let component: TariffWizardComponent;
  let fixture: ComponentFixture<TariffWizardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TariffWizardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TariffWizardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
