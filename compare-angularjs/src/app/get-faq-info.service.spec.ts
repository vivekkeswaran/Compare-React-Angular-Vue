import { TestBed, inject } from '@angular/core/testing';

import { GetFaqInfoService } from './get-faq-info.service';

describe('GetFaqInfoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetFaqInfoService]
    });
  });

  it('should be created', inject([GetFaqInfoService], (service: GetFaqInfoService) => {
    expect(service).toBeTruthy();
  }));
});
