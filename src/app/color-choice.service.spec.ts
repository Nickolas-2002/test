import { TestBed } from '@angular/core/testing';

import { ColorChoiceService } from './color-choice.service';

describe('ColorChoiceService', () => {
  let service: ColorChoiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ColorChoiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
