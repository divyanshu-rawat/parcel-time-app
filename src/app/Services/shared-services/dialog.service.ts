import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { ConfirmationalDialogComponent } from '../../Components/shared-components/confirmational-dialog/confirmational-dialog.component';
import { AddUpdatePostOfficeDialogComponent } from '../../Components/shared-components/add-update-post-office-dialog/add-update-post-office-dialog.component';
import { AddUpdateShipmentDialogComponent } from '../../Components/shared-components/add-update-shipment-dialog/add-update-shipment-dialog.component';


/**
 * Dialog Service
 * Dialog service is basically used to trigger different types of dialogs:
          * Confirmational dialog (To ask user whether to perform the fiven operation or not.) 
          * openPostOfficeDialog: Used to grab input data to add/update data on post-office api-endpoint.
          * openShipmentDialog: Used to grab input data to add/update data on shipment api-endpoint.
 */


@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private dialog: MatDialog) { }

  public openConfirmationDialog(type): MatDialogRef<any, any> {
    const dialogRef = this.dialog.open(ConfirmationalDialogComponent, {
      width: '300px',
      data: { dialogTitle: type == "shipment" ? "Delete Shipment" : "Delete Post Office", dialogText: "Are you sure?" }
    });
    // returning reference to to dialog used by post-office/shipment to capture dialog input data.
    return dialogRef;
  }

  public openPostOfficeDialog(postOfficeData?): MatDialogRef<any, any> {
    let dialogRef: MatDialogRef<any, any>;
    /* Dialog service is basically used to trigger different types of dialogs:
       * Type key in dialog.open() fn is used to determine whether we have to use the dialog to perform
          edit or add operation, as to ensure code reusability same dialog is used to edit/add postOffice.
     */
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

    // returning reference to to dialog used by post-office/shipment to capture dialog input data.
    return dialogRef;
  }

  public openShipmentDialog(shipmentData?): MatDialogRef<any, any> {
    /*
      * Different dialog to perform edit/add operation on shipment data, for code readability I created
        different dialog for shipment instead of using the same one for post office to add/update shipment data.
    */
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
