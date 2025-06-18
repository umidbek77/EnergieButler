import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjectUsegeHeizstromwechselComponent } from './object-usege-heizstromwechsel.component';

describe('ObjectUsegeHeizstromwechselComponent', () => {
  let component: ObjectUsegeHeizstromwechselComponent;
  let fixture: ComponentFixture<ObjectUsegeHeizstromwechselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ObjectUsegeHeizstromwechselComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObjectUsegeHeizstromwechselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
