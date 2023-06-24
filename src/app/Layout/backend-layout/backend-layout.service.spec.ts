import { TestBed } from '@angular/core/testing';

import { BackendLayoutService } from './backend-layout.service';

describe('BackendLayoutService', () => {
  let service: BackendLayoutService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BackendLayoutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
