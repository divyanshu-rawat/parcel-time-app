import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { shipment } from '../../../Interfaces/shipment';
@Component({
  selector: 'app-shipment-list-item',
  templateUrl: './shipment-list-item.component.html',
  styleUrls: ['./shipment-list-item.component.scss']
})
export class ShipmentListItemComponent implements OnInit {

  @Input() shipment: shipment;
  @Output() updateShipment = new EventEmitter<shipment>();
  @Output() deleteShipment = new EventEmitter<number>();
  constructor() { }

  ngOnInit() {
  }

  // Events emitted by app-post-office-item to communicate to parent-component(app-post-office).
  updateShipmentEvent(postOffice) {
    this.updateShipment.emit(postOffice)
  }

  deleteShipmentEvent(id) {
    this.deleteShipment.emit(id);
  }

}
