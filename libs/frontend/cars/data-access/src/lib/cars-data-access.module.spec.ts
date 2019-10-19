import { async, TestBed } from '@angular/core/testing';
import { CarsDataAccessModule } from './cars-data-access.module';

describe('CarsDataAccessModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CarsDataAccessModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(CarsDataAccessModule).toBeDefined();
  });
});
