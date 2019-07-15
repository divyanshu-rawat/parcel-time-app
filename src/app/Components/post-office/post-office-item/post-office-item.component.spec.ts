import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostOfficeItemComponent } from './post-office-item.component';

describe('PostOfficeItemComponent', () => {
  let component: PostOfficeItemComponent;
  let fixture: ComponentFixture<PostOfficeItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostOfficeItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostOfficeItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
