import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngeboteComponent } from './angebote.component';

describe('AngeboteComponent', () => {
  let component: AngeboteComponent;
  let fixture: ComponentFixture<AngeboteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngeboteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngeboteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
