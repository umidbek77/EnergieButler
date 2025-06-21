import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StormStageComponent } from './storm-stage.component';

describe('StormStageComponent', () => {
  let component: StormStageComponent;
  let fixture: ComponentFixture<StormStageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StormStageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StormStageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
