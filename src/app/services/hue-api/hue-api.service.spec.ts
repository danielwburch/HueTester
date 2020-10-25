import { TestBed } from '@angular/core/testing';

import { HueApiService } from './hue-api.service';

describe('HueApiService', () => {
  let service: HueApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HueApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
