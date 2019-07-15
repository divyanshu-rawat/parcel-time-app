import { Component, OnInit } from '@angular/core';
import { ShipmentService } from '../../Services/shipment-service/shipment.service';
import { shipment } from '../../Interfaces/shipment';
import { DialogService } from '../../Services/shared-services/dialog.service';
import { shipmentWeight } from '../../Interfaces/shipmentWeight';

/**
 * Shipment Component
 * Component responsible for all the interactions happening in shipment route.
 * For Instance CRUD Opeartions, triggering dailogs, filtering the content, pagination logic.
 */


@Component({
  selector: 'app-shipment',
  templateUrl: './shipment.component.html',
  styleUrls: ['./shipment.component.scss']
})
export class ShipmentComponent implements OnInit {
  private p: number = 1;
  private shipments: shipment[] = [];
  private searchText: string;

  /*
   Original shipments variable is used to preserve original shipment data retrieved from rest-api,
   as filters keep on mutating the original data.
  */
  private originalShipments: shipment[] = [];

  /*
    selectedStatusOptions, selectedWeightOptions are used to grab currently checked items,
    shipmentStatus mat-selection-list and shipmentWeigt mat-selection-list.
  */
  private selectedStatusOptions = []
  private selectedWeightOptions = [];

  // Filter specific interface, used to show html text for mat-selection-list.
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
    // grabbing all shipments related data on component mounting/initalization.
    this.getShipments();
  }


  ngOnDestroy() {
    /*
      Unsubscribing all the subscriptions on component destroy,  
      ensuring good practises and performance improvements.
    */
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

  // Leverages shipmentService to get shipment data from rest-api.
  private getShipments(): void {
    this.shipmentService.getShipments().subscribe(shipments => {
      this.shipments = shipments;
      this.originalShipments = shipments;
    });
  }

  // Leverages shipmentService to delete shipment data from rest-api.
  private deleteShipment(id: string): void {
    const dialogRef = this.dialogService.openConfirmationDialog("shipment");
    this.deleteShipmentSubscription = dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.shipmentService.deleteShipment(id).subscribe(shipments => {
          this.shipments = shipments;
          this.originalShipments = shipments;
        });
      }
    });
  }

  // Leverages shipmentService to add shipment data from rest-api.
  private addNewShipment(): void {
    const dialogRef = this.dialogService.openShipmentDialog();
    this.addShipmentSubscription = dialogRef.afterClosed().subscribe(result => {
      if (result) {
        if (result.event == 'Add') {
          this.shipmentService.addShipment(result.data).subscribe(shipments => {
            this.shipments = shipments;
            this.originalShipments = shipments;
          });
        }
      }
    });
  }
  // Leverages shipmentService to update shipment data from rest-api.
  private updateShipment(shipment: shipment): void {
    const dialogRef = this.dialogService.openShipmentDialog(shipment);
    this.updateShipmentSubscription = dialogRef.afterClosed().subscribe(result => {
      if (result) {
        if (result.event == 'Edit') {
          this.shipmentService.updateShipment(shipment.id, result.data).subscribe(shipments => {
            this.shipments = shipments;
            this.originalShipments = shipments;
          });
        }
      }
    });
  }

  // Filtering specific functions.
  // Event triggered on input change of shipment weight mat-selection-list.
  onShipmentWeightChange(value) {
    this.applyFilter(this.selectedWeightOptions, this.selectedStatusOptions);
  }
  // Event triggered on input change of shipment status mat-selection-list.
  onShipmentStatusChange(value) {
    this.applyFilter(this.selectedWeightOptions, this.selectedStatusOptions);
  }

  // This function holds algorithm to filter shipments, taking union of selected items.
  applyFilter(weightArray, statusArray) {
    /*
       weightArray comprises of selected weightTypes in mat-selction-list.
       For Instance - if selected mat-selectin-list item is 'Less then 1 Kg'
       and More then 5 kg, then weightArray will look like this [0,2].
       Indicating the id of selected mat-item in mat-selection-list. 
    */
    // resetting shipments to original data on every new filter addition.
    this.shipments = this.originalShipments;
    const filterArray = []
    for (let i = 0; i < this.shipments.length; i++) {
      /* Flags are used to ensure we only push that shipment into filterArray,
         that satisfies all the criteria as per selected checkboxes in mat-selection-list.
         For Instance - if selected weight type is Less than 1 kg, anf shipment status is
         and destination key in shipment obj is true, then only select that shipment that 
         satisfies bitht the conditions.
      */
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
