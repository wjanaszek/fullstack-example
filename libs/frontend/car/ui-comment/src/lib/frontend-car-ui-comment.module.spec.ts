import { async, TestBed } from '@angular/core/testing';
import { FrontendCarUiCommentModule } from './frontend-car-ui-comment.module';

describe('FrontendCarUiCommentModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FrontendCarUiCommentModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(FrontendCarUiCommentModule).toBeDefined();
  });
});
