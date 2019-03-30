import { TestBed } from '@angular/core/testing';

import { SaAngularDropdownService } from './sa-angular-dropdown.service';

describe('SaAngularDropdownService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SaAngularDropdownService = TestBed.get(SaAngularDropdownService);
    expect(service).toBeTruthy();
  });
});
