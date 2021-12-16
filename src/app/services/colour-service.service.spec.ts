import { TestBed } from '@angular/core/testing';

import { ColourServiceService } from './colour-service.service';

describe('ColourServiceService', () => {
  let service: ColourServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ColourServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
