import { TestBed } from '@angular/core/testing';

import { AngeboteService } from './angebote.service';

describe('AngeboteService', () => {
  let service: AngeboteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AngeboteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
