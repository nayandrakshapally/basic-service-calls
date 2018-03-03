import { TestBed, inject } from '@angular/core/testing';

import { HttpmsgService } from './httpmsg.service';

describe('HttpmsgService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpmsgService]
    });
  });

  it('should be created', inject([HttpmsgService], (service: HttpmsgService) => {
    expect(service).toBeTruthy();
  }));
});
