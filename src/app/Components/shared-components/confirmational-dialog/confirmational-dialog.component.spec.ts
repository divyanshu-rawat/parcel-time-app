import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmationalDialogComponent } from './confirmational-dialog.component';

describe('ConfirmationalDialogComponent', () => {
  let component: ConfirmationalDialogComponent;
  let fixture: ComponentFixture<ConfirmationalDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmationalDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmationalDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
