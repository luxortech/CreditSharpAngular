import { TestBed } from '@angular/core/testing';

import { CsWebServiceService } from './cswebservice.service';

describe('CsWebServiceService', () => {
  let service: CsWebServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CsWebServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
