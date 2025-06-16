import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarumEnergiebutlerComponent } from './warum-energiebutler.component';

describe('WarumEnergiebutlerComponent', () => {
  let component: WarumEnergiebutlerComponent;
  let fixture: ComponentFixture<WarumEnergiebutlerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WarumEnergiebutlerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WarumEnergiebutlerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
