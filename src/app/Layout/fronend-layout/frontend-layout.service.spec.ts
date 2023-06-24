import { TestBed } from '@angular/core/testing';

import { FrontendLayoutService } from './frontend-layout.service';

describe('FrontendLayoutService', () => {
  let service: FrontendLayoutService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FrontendLayoutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
