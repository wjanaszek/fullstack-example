import { async, TestBed } from '@angular/core/testing';
import { FrontendCarDataAccessModule } from './frontend-car-data-access.module';

describe('FrontendCarDataAccessModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FrontendCarDataAccessModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(FrontendCarDataAccessModule).toBeDefined();
  });
});
