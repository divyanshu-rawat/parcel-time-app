import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { AddUpdateShipmentDialogComponent } from './add-update-shipment-dialog.component';
import { MatIconModule } from '@angular/material/icon';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule, MatInputModule } from '@angular/material';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatListModule } from '@angular/material/list';

import {
  HttpClientTestingModule,
} from '@angular/common/http/testing';

describe('AddUpdateShipmentDialogComponent', () => {
  let component: AddUpdateShipmentDialogComponent;
  let fixture: ComponentFixture<AddUpdateShipmentDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddUpdateShipmentDialogComponent],
      imports: [
        FormsModule,
        MatIconModule,
        MatFormFieldModule,
        MatDialogModule,
        MatInputModule,
        NoopAnimationsModule,
        MatSelectModule,
        MatRadioModule,
        MatCheckboxModule,
        MatListModule,
        HttpClientTestingModule
      ],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {} }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUpdateShipmentDialogComponent);
    component = fixture.componentInstance;
    component.data = {
      defaultData: {
        origin: true,
        delivered: true,
        destination: true,
        weight: { id: 0, desc: "Less than 1kg" },
        type: { id: 0, name: "letter" },
        office: {
          PLZ: 80963,
          id: "b01162a6-6fdf-40d7-aa78-2991b006cc63",
          name: "Munich"
        }
      }
    }
    fixture.detectChanges();
  });

  it('should create ', () => {
    expect(component).toBeTruthy();
  });
});
