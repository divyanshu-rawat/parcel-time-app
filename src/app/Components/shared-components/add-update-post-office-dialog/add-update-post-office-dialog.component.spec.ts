import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUpdatePostOfficeDialogComponent } from './add-update-post-office-dialog.component';

describe('AddUpdatePostOfficeDialogComponent', () => {
  let component: AddUpdatePostOfficeDialogComponent;
  let fixture: ComponentFixture<AddUpdatePostOfficeDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddUpdatePostOfficeDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUpdatePostOfficeDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
