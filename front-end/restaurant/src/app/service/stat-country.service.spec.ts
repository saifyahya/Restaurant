import { TestBed } from '@angular/core/testing';

import { StatCountryService } from './stat-country.service';

describe('StatCountryService', () => {
  let service: StatCountryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StatCountryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
