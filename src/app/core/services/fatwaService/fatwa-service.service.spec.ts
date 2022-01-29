import { TestBed } from '@angular/core/testing';

import { FatwaServiceService } from './fatwa-service.service';

describe('FatwaServiceService', () => {
  let service: FatwaServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FatwaServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
