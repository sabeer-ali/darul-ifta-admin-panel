import { TestBed } from '@angular/core/testing';

import { BasepathInterceptor } from './basepath.interceptor';

describe('BasepathInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      BasepathInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: BasepathInterceptor = TestBed.inject(BasepathInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
