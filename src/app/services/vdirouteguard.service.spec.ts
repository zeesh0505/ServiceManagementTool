import { TestBed, inject } from '@angular/core/testing';

import { VdirouteguardService } from './vdirouteguard.service';

describe('VdirouteguardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VdirouteguardService]
    });
  });

  it('should be created', inject([VdirouteguardService], (service: VdirouteguardService) => {
    expect(service).toBeTruthy();
  }));
});
