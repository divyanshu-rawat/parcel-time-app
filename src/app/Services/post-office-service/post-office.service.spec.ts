import { TestBed } from '@angular/core/testing';

import { PostOfficeService } from './post-office.service';

describe('PostOfficeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PostOfficeService = TestBed.get(PostOfficeService);
    expect(service).toBeTruthy();
  });
});
