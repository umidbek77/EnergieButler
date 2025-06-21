import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TariffCompareComponent } from './tariff-compare.component';

describe('TariffCompareComponent', () => {
  let component: TariffCompareComponent;
  let fixture: ComponentFixture<TariffCompareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TariffCompareComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TariffCompareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
