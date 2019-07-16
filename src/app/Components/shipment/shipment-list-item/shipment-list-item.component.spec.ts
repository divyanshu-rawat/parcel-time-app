import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIconModule } from '@angular/material/icon';
import { ShipmentListItemComponent } from './shipment-list-item.component';
import { shipmentType } from '../../../Interfaces/shipmentType';
describe('ShipmentListItemComponent', () => {
  let component: ShipmentListItemComponent;
  let fixture: ComponentFixture<ShipmentListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ShipmentListItemComponent],
      imports: [MatIconModule]
    })

      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShipmentListItemComponent);
    component = fixture.componentInstance;
    component.shipment = {
      id: "b01162a6-6fdf-40d7-aa78-2991b006cc63",
      origin: true,
      destination: true,
      delivered: true,
      weight: { id: 0, desc: "Less than 1kg" },
      type: { id: 0, name: "letter" },
      office: {
        PLZ: 80963,
        id: "b01162a6-6fdf-40d7-aa78-2991b006cc63",
        name: "Munich"
      }
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
