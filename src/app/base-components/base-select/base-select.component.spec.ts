import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseSelectComponent } from './base-select.component';

describe('BaseSelectComponent', () => {
  let component: BaseSelectComponent;
  let fixture: ComponentFixture<BaseSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BaseSelectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BaseSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
