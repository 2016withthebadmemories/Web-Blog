import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentOfPostComponent } from './comment-of-post.component';

describe('CommentOfPostComponent', () => {
  let component: CommentOfPostComponent;
  let fixture: ComponentFixture<CommentOfPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommentOfPostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommentOfPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
