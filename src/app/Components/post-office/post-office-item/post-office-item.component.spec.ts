import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIconModule } from '@angular/material/icon'
import { PostOfficeItemComponent } from './post-office-item.component';

describe('PostOfficeItemComponent', () => {
  let component: PostOfficeItemComponent;
  let fixture: ComponentFixture<PostOfficeItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PostOfficeItemComponent],
      imports: [MatIconModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostOfficeItemComponent);
    component = fixture.componentInstance;
    component.postOffice = {
      id: "b01162a6-6fdf-40d7-aa78-2991b006cc63",
      name: 'Munich',
      PLZ: 80963,
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
