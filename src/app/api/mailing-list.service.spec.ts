import {TestBed} from '@angular/core/testing';
import {MailingListService} from './mailing-list.service';

describe('MailingListService', () => {
  let service: MailingListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MailingListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
