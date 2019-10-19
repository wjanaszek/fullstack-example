import { async, TestBed } from '@angular/core/testing';
import { CarsUiCommentModule } from './cars-ui-comment.module';

describe('CarsUiCommentModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CarsUiCommentModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(CarsUiCommentModule).toBeDefined();
  });
});
