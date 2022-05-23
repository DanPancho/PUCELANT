import { TestBed } from '@angular/core/testing';

import { NewFriendService } from './new-friend.service';

describe('NewFriendService', () => {
  let service: NewFriendService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewFriendService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
