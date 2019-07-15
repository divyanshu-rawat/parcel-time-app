import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUpdateShipmentDialogComponent } from './add-update-shipment-dialog.component';

describe('AddUpdateShipmentDialogComponent', () => {
  let component: AddUpdateShipmentDialogComponent;
  let fixture: ComponentFixture<AddUpdateShipmentDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddUpdateShipmentDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUpdateShipmentDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
