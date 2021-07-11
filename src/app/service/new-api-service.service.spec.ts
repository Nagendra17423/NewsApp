import { TestBed } from '@angular/core/testing';

import { NewApiServiceService } from './new-api-service.service';

describe('NewApiServiceService', () => {
  let service: NewApiServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewApiServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
