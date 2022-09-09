import { TestBed } from '@angular/core/testing';

import { AdbDataService } from './adb-data.service';

describe('AdbDataService', () => {
  let service: AdbDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdbDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
