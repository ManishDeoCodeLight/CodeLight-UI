import { TestBed } from '@angular/core/testing';

import { ConfigDashboardService } from './config-dashboard.service';

describe('ConfigDashboardService', () => {
  let service: ConfigDashboardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConfigDashboardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
