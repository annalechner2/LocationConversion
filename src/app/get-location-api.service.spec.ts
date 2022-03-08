import { TestBed } from '@angular/core/testing';

import { GetLocationApiService } from './get-location-api.service';

describe('GetLocationApiService', () => {
  let service: GetLocationApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetLocationApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
