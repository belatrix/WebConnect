/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { StarService } from './star.service';

describe('Service: Star', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StarService]
    });
  });

  it('should ...', inject([StarService], (service: StarService) => {
    expect(service).toBeTruthy();
  }));
});
