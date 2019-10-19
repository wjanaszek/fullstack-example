import { async, TestBed } from '@angular/core/testing';
import { CarsFeatureModule } from './cars-feature.module';

describe('CarsFeatureModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CarsFeatureModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(CarsFeatureModule).toBeDefined();
  });
});
