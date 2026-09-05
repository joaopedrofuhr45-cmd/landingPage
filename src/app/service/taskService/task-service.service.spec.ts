import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

import { TaskServiceService } from './task-service.service';

describe('TaskServiceService', () => {
  let service: TaskServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    });
    service = TestBed.inject(TaskServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
