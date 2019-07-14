import { Component, OnInit } from '@angular/core';
import { ShipmentService } from '../../Services/shipment-service/shipment.service';
import { shipment } from '../../Interfaces/shipment';

@Component({
  selector: 'app-shipment',
  templateUrl: './shipment.component.html',
  styleUrls: ['./shipment.component.scss']
})
export class ShipmentComponent implements OnInit {

  private shipments: shipment[] = [];
  constructor(private shipmentService: ShipmentService) { }

  ngOnInit() {
    this.getShipments();
  }

  private getShipments() {
    this.shipmentService.getShipments().subscribe(shipments => {
      this.shipments = shipments;
      console.log(this.shipments);
    });
  }

}
