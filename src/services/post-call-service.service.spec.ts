import { TestBed } from '@angular/core/testing';

import { PostCallServiceService } from './post-call-service.service';

describe('PostCallServiceService', () => {
  let service: PostCallServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostCallServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
