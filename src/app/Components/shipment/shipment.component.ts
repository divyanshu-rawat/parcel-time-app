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
  private originalShipments: shipment[] = [];
  private showClearFilterbtn: boolean;
  private selectedStatusOptions = []
  private selectedWeightOptions = [];

  // Filter specific interface.
  private typesOfWeights: shipmentWeight[] = [
    { id: 0, desc: "Less than 1 Kg" },
    { id: 1, desc: "Between 1 Kg & 5 Kg" },
    { id: 2, desc: "More than 5 Kg" }
  ];
  private typesOfStatus: any[] = [
    { id: 0, type: "origin" },
    { id: 1, type: "destination" },
    { id: 2, type: "delivered" }
  ];

  // subscription variables
  private deleteShipmentSubscription;
  private updateShipmentSubscription;
  private addShipmentSubscription;
  constructor(private shipmentService: ShipmentService,
    private dialogService: DialogService) { }

  ngOnInit() {
    this.getShipments();
  }


  ngOnDestroy() {
    if (this.deleteShipmentSubscription) {
      this.deleteShipmentSubscription.unsubscribe();
    }
    if (this.updateShipmentSubscription) {
      this.updateShipmentSubscription.unsubscribe();
    }
    if (this.addShipmentSubscription) {
      this.addShipmentSubscription.unsubscribe();
    }
  }

  private getShipments(): void {
    this.shipmentService.getShipments().subscribe(shipments => {
      this.shipments = shipments;
      this.originalShipments = shipments;
    });
  }

  private deleteShipment(id: string): void {
    const dialogRef = this.dialogService.openConfirmationDialog("shipment");
    this.deleteShipmentSubscription = dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.shipmentService.deleteShipment(id).subscribe(postoffices => {
          this.shipments = postoffices;
        });
      }
    });
  }

  private addNewShipment(): void {
    const dialogRef = this.dialogService.openShipmentDialog();
    this.addShipmentSubscription = dialogRef.afterClosed().subscribe(result => {
      if (result) {
        if (result.event == 'Add') {
          this.shipmentService.addShipment(result.data).subscribe(shipments => {
            this.shipments = shipments;
          });
        }
      }
    });
  }

  private updateShipment(shipment: shipment): void {
    const dialogRef = this.dialogService.openShipmentDialog(shipment);
    this.updateShipmentSubscription = dialogRef.afterClosed().subscribe(result => {
      if (result) {
        if (result.event == 'Edit') {
          this.shipmentService.updateShipment(shipment.id, result.data).subscribe(shipments => {
            this.shipments = shipments;
          });
        }
      }
    });
  }

  // Filtering specific functions.

  private showfilterClearbtn() {
    if (!this.showClearFilterbtn) {
      this.showClearFilterbtn = true;
    }
  }

  onShipmentWeightChange(value) {
    this.applyFilter(this.selectedWeightOptions, this.selectedStatusOptions);
  }

  onShipmentStatusChange(value) {
    this.applyFilter(this.selectedWeightOptions, this.selectedStatusOptions);
  }

  applyFilter(weightArray, statusArray) {
    this.shipments = this.originalShipments;
    const filterArray = []
    for (let i = 0; i < this.shipments.length; i++) {
      let flag_1 = false;
      let flag_2 = false
      if (weightArray.length > 0) {
        for (let x = 0; x < weightArray.length; x++) {
          if (weightArray[x] == this.shipments[i].weight.id) {
            flag_1 = true;
          }
        }
      } else {
        flag_1 = true;
      }
      if (statusArray.length > 0) {
        for (let x = 0; x < statusArray.length; x++) {
          if (this.shipments[i][statusArray[x]] == true) {
            flag_2 = true;
          }
        }
      } else {
        flag_2 = true;
      }
      if (flag_1 && flag_2) {
        filterArray.push(this.shipments[i]);
      }
    }
    this.shipments = filterArray;
  }
}
