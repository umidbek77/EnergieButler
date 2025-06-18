import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjectUsegeGaswechselComponent } from './object-usege-gaswechsel.component';

describe('ObjectUsegeGaswechselComponent', () => {
  let component: ObjectUsegeGaswechselComponent;
  let fixture: ComponentFixture<ObjectUsegeGaswechselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ObjectUsegeGaswechselComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObjectUsegeGaswechselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
