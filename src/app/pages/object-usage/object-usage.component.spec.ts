import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjectUsageComponent } from './object-usage.component';

describe('ObjectUsageComponent', () => {
  let component: ObjectUsageComponent;
  let fixture: ComponentFixture<ObjectUsageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ObjectUsageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObjectUsageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
