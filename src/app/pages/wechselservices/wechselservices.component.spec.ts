import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WechselservicesComponent } from './wechselservices.component';

describe('WechselservicesComponent', () => {
  let component: WechselservicesComponent;
  let fixture: ComponentFixture<WechselservicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WechselservicesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WechselservicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
