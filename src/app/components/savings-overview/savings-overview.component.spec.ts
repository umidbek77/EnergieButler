import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavingsOverviewComponent } from './savings-overview.component';

describe('SavingsOverviewComponent', () => {
  let component: SavingsOverviewComponent;
  let fixture: ComponentFixture<SavingsOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SavingsOverviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SavingsOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
