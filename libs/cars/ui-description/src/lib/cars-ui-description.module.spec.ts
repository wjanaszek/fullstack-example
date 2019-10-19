import { async, TestBed } from '@angular/core/testing';
import { CarsUiDescriptionModule } from './cars-ui-description.module';

describe('CarsUiDescriptionModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CarsUiDescriptionModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(CarsUiDescriptionModule).toBeDefined();
  });
});
