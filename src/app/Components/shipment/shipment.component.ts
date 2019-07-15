import { Component, OnInit } from '@angular/core';
import { ShipmentService } from '../../Services/shipment-service/shipment.service';
import { shipment } from '../../Interfaces/shipment';
import { DialogService } from '../../Services/shared-services/dialog.service';
import { shipmentWeight } from '../../Interfaces/shipmentWeight';
@Component({
  selector: 'app-shipment',
  templateUrl: './shipment.component.html',
  styleUrls: ['./shipment.component.scss']
})
export class ShipmentComponent implements OnInit {

  private shipments: shipment[] = [];
  private searchText: string;
  private filteredArray: shipment[] = [];
  private retainedShipmentData: shipment[] = [];
  private showClearFilterbtn: boolean;
  private shipmentWeights: shipmentWeight[] = [
    { id: 0, desc: "Less than 1 Kg" },
    { id: 1, desc: "Between 1 Kg & 5 Kg" },
    { id: 2, desc: "More than 5 Kg" }
  ];

  private selectedShipmentWeight: string;
  constructor(private shipmentService: ShipmentService,
    private dialogService: DialogService) { }

  ngOnInit() {
    this.getShipments();
  }

  private getShipments() {
    this.shipmentService.getShipments().subscribe(shipments => {
      this.shipments = shipments;
      this.retainedShipmentData = shipments;
    });
  }

  private deleteShipment(id) {
    const dialogRef = this.dialogService.openConfirmationDialog("shipment");
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.shipmentService.deleteShipment(id).subscribe(postoffices => {
          this.shipments = postoffices;
        });
      }
    });
  }

  private addNewShipment() {
    const dialogRef = this.dialogService.openShipmentDialog();
    dialogRef.afterClosed().subscribe(result => {
      if (result.event == 'Add') {
        this.shipmentService.addShipment(result.data).subscribe(shipments => {
          this.shipments = shipments;
        });
      }
    });
  }

  private updateShipment(shipment) {
    const dialogRef = this.dialogService.openShipmentDialog(shipment);
    dialogRef.afterClosed().subscribe(result => {
      if (result.event == 'Edit') {
        this.shipmentService.updateShipment(shipment.id, result.data).subscribe(shipments => {
          this.shipments = shipments;
        });
      }
    });
  }

  // Filtering specific functions.

  private radioButtonSelected(event) {
    this.showClearFilterbtn = true;
    const { value } = event;
    this.filteredArray = this.shipments.filter(shipment => shipment.weight.id == value)
    this.shipments = this.filteredArray;
  }

  private clearFilters(){
    this.showClearFilterbtn = false;
    this.selectedShipmentWeight = null;
    this.shipments = this.retainedShipmentData;
  }
}
