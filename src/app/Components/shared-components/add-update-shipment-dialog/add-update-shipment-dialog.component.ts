import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

// Importing Services
import { PostOfficeService } from '../../../Services/post-office-service/post-office.service';
// Importing Interfaces
import { postOffice } from '../../../Interfaces/postOffice';
import { shipmentWeight } from '../../../Interfaces/shipmentWeight';
import { shipmentType } from '../../../Interfaces/shipmentType';

@Component({
  selector: 'app-add-update-shipment-dialog',
  templateUrl: './add-update-shipment-dialog.component.html',
  styleUrls: ['./add-update-shipment-dialog.component.scss']
})
export class AddUpdateShipmentDialogComponent implements OnInit {

  private dialogTitle: string;
  private operation: string;
  private postOfficeList: postOffice[];
  private buttonText: string;
  private shipmentWeights: shipmentWeight[] = [
    { id: 0, desc: "Less than 1 Kg" },
    { id: 1, desc: "Between 1 Kg & 5 Kg" },
    { id: 2, desc: "More than 5 Kg" }
  ];
  private shipmentType: shipmentType[] = [{ id: 0, name: "Letter" }, { id: 1, name: "Package" }];

  // Capture user selected shipment data.

  private selectedShipmentType: number;
  private selectedShipmentWeight: number;
  private selectedPostOffice: string;
  private selectedShipmentOrigin = false;
  private selectedShipmentDestination = false;
  private shipmentdelivered = false;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<AddUpdateShipmentDialogComponent>,
    private postOfficeService: PostOfficeService
  ) { }

  ngOnInit() {
    if (this.data.type == "Add") {
      this.buttonText = 'Add';
      this.operation = 'Add';
    } else {
      this.buttonText = 'Update';
      this.operation = 'Edit';
      this.selectedShipmentOrigin = this.data.defaultData.origin;
      this.shipmentdelivered = this.data.defaultData.delivered;
      this.selectedShipmentWeight = this.data.defaultData.weight.id;
      this.selectedShipmentType = this.data.defaultData.type.id;
      this.selectedShipmentDestination = this.data.defaultData.destination;
      this.selectedPostOffice = this.data.defaultData.office.id;
    }
    this.dialogTitle = this.data.dialogTitle;
    this.postOfficeService.getPostOffices().subscribe((postOffices) => {
      this.postOfficeList = postOffices;
    })
  }


  private addShipment() {
    this.dialogRef.close({
      event: this.operation,
      data: {
        type: this.selectedShipmentType,
        origin: this.selectedShipmentOrigin,
        weight: this.selectedShipmentWeight,
        office: this.selectedPostOffice,
        destination: this.selectedShipmentDestination,
        delivered: this.shipmentdelivered,
      }
    });
  }

}
