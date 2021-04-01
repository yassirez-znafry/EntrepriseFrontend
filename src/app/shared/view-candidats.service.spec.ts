import { TestBed } from '@angular/core/testing';

import { ViewCandidatsService } from './view-candidats.service';

describe('ViewCandidatsService', () => {
  let service: ViewCandidatsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewCandidatsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
