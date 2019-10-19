import { async, TestBed } from '@angular/core/testing';
import { FrontendCarFeatureModule } from './frontend-car-feature.module';

describe('FrontendCarFeatureModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FrontendCarFeatureModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(FrontendCarFeatureModule).toBeDefined();
  });
});
