import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipmentListItemComponent } from './shipment-list-item.component';

describe('ShipmentListItemComponent', () => {
  let component: ShipmentListItemComponent;
  let fixture: ComponentFixture<ShipmentListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShipmentListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShipmentListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
