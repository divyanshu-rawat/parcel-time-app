import { Component, OnInit } from '@angular/core';
import { ShipmentService } from '../../Services/shipment-service/shipment.service';
import { shipment } from '../../Interfaces/shipment';
import { DialogService } from '../../Services/shared-services/dialog.service';
import { shipmentWeight } from '../../Interfaces/shipmentWeight';
import { shipmentType } from '../../Interfaces/shipmentType';
@Component({
  selector: 'app-shipment',
  templateUrl: './shipment.component.html',
  styleUrls: ['./shipment.component.scss']
})
export class ShipmentComponent implements OnInit {
  private p: number = 1;
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
  private shipmentType: shipmentType[] = [{ id: 0, name: "Letter" }, { id: 1, name: "Package" }];
  private selectedShipmentType: number;
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

  private deleteShipment(id: string) {
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

  private updateShipment(shipment: shipment) {
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

  private filterbyShipmentWeight(event) {
    if(!this.showClearFilterbtn){
      this.showClearFilterbtn = true;
    }
    const { value } = event;
    this.filteredArray = this.shipments.filter(shipment => shipment.weight.id == value)
    this.shipments = this.filteredArray;
  }

  private filterbyShipmentType(event) {
    if(!this.showClearFilterbtn){
      this.showClearFilterbtn = true;
    }
    const { value } = event;
    this.filteredArray = this.shipments.filter(shipment => shipment.type.id == value)
    this.shipments = this.filteredArray;
  }

  private clearFilters() {
    this.showClearFilterbtn = false;
    this.selectedShipmentWeight = null;
    this.selectedShipmentType = null;
    this.searchText = null;
    this.shipments = this.retainedShipmentData;
  }
}
