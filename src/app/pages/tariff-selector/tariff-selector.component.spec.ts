import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TariffSelectorComponent } from './tariff-selector.component';

describe('TariffSelectorComponent', () => {
  let component: TariffSelectorComponent;
  let fixture: ComponentFixture<TariffSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TariffSelectorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TariffSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
