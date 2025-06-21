import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferReadyComponent } from './offer-ready.component';

describe('OfferReadyComponent', () => {
  let component: OfferReadyComponent;
  let fixture: ComponentFixture<OfferReadyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OfferReadyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OfferReadyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
