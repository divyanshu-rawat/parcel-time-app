import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { ConfirmationalDialogComponent } from '../../Components/shared-components/confirmational-dialog/confirmational-dialog.component';
import { AddUpdatePostOfficeDialogComponent } from '../../Components/shared-components/add-update-post-office-dialog/add-update-post-office-dialog.component';
import { AddUpdateShipmentDialogComponent } from '../../Components/shared-components/add-update-shipment-dialog/add-update-shipment-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private dialog: MatDialog) { }

  public openConfirmationDialog(type) {
    const dialogRef = this.dialog.open(ConfirmationalDialogComponent, {
      width: '300px',
      data: { dialogTitle: type == "shipment" ? "Delete Shipment" : "Delete Post Office", dialogText: "Are you sure?" }
    });
    return dialogRef;
  }

  public openPostOfficeDialog(postOfficeData?) {
    let dialogRef: MatDialogRef<any, any>;
    if (postOfficeData) {
      dialogRef = this.dialog.open(AddUpdatePostOfficeDialogComponent, {
        width: '300px',
        data: { dialogTitle: 'Edit Post Office', type: "Edit", defaultData: postOfficeData }
      });
    } else {
      dialogRef = this.dialog.open(AddUpdatePostOfficeDialogComponent, {
        width: '300px',
        data: { dialogTitle: 'Add Post Office', type: "Add" }
      });
    }
    return dialogRef;
  }

  public openShipmentDialog(shipmentData?) {
    let dialogRef: MatDialogRef<any, any>;
    if (shipmentData) {
      dialogRef = this.dialog.open(AddUpdateShipmentDialogComponent, {
        width: '400px',
        data: { dialogTitle: 'Edit A Shipment', type: "Edit", defaultData: shipmentData }
      });
    } else {
      dialogRef = this.dialog.open(AddUpdateShipmentDialogComponent, {
        width: '400px',
        data: { dialogTitle: 'Add A Shipment', type: "Add" }
      });
    }
    return dialogRef;
  }
}
