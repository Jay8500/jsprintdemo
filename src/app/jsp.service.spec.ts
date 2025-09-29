import { TestBed } from '@angular/core/testing';

import { JspService } from './jsp.service';

describe('JspService', () => {
  let service: JspService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JspService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
