import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { AddUpdatePostOfficeDialogComponent } from './add-update-post-office-dialog.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule, MatInputModule } from '@angular/material';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('AddUpdatePostOfficeDialogComponent', () => {
  let component: AddUpdatePostOfficeDialogComponent;
  let fixture: ComponentFixture<AddUpdatePostOfficeDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddUpdatePostOfficeDialogComponent],
      imports: [FormsModule, MatFormFieldModule, MatDialogModule, MatInputModule, NoopAnimationsModule],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {} }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUpdatePostOfficeDialogComponent);
    component = fixture.componentInstance;
    component.data = {
      defaultData: {
        name: 'Munich'
      }
    }
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
