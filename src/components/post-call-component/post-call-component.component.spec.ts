import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostCallComponentComponent } from './post-call-component.component';

describe('PostCallComponentComponent', () => {
  let component: PostCallComponentComponent;
  let fixture: ComponentFixture<PostCallComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostCallComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostCallComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
