import { TestBed, inject } from '@angular/core/testing';

import { GetSchoolsDataService } from './get-schools-data.service';

describe('GetSchoolsDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetSchoolsDataService]
    });
  });

  it('should be created', inject([GetSchoolsDataService], (service: GetSchoolsDataService) => {
    expect(service).toBeTruthy();
  }));
});
