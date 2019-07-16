import { async, ComponentFixture, TestBed, } from '@angular/core/testing';
import { NgxPaginationModule } from 'ngx-pagination';
import { MatIconModule } from '@angular/material/icon'
import { PostOfficeComponent } from './post-office.component';
import { PostOfficeItemComponent } from './post-office-item/post-office-item.component';
import {
  HttpClientTestingModule,
} from '@angular/common/http/testing';
import { MatDialogModule } from "@angular/material";

describe('PostOfficeComponent', () => {
  let component: PostOfficeComponent;
  let fixture: ComponentFixture<PostOfficeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PostOfficeComponent, PostOfficeItemComponent],
      imports: [MatIconModule, MatDialogModule, NgxPaginationModule, HttpClientTestingModule],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostOfficeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

