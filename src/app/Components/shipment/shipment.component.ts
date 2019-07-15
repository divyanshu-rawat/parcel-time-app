import { Component, OnInit } from '@angular/core';
import { ShipmentService } from '../../Services/shipment-service/shipment.service';
import { shipment } from '../../Interfaces/shipment';
import { DialogService } from '../../Services/shared-services/dialog.service';
@Component({
  selector: 'app-shipment',
  templateUrl: './shipment.component.html',
  styleUrls: ['./shipment.component.scss']
})
export class ShipmentComponent implements OnInit {

  private shipments: shipment[] = [];
  constructor(private shipmentService: ShipmentService,
    private dialogService: DialogService) { }

  ngOnInit() {
    this.getShipments();
  }

  private getShipments() {
    this.shipmentService.getShipments().subscribe(shipments => {
      this.shipments = shipments;
      console.log(this.shipments);
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
      if(result.event == 'Edit'){
        this.shipmentService.updateShipment(shipment.id, result.data).subscribe(shipments => {
          this.shipments = shipments;
        });
      }
    });
  }

}
