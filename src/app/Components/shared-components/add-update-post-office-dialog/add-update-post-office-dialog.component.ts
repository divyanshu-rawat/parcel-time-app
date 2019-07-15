import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
@Component({
  selector: 'app-add-update-post-office-dialog',
  templateUrl: './add-update-post-office-dialog.component.html',
  styleUrls: ['./add-update-post-office-dialog.component.scss']
})
export class AddUpdatePostOfficeDialogComponent implements OnInit {

  private operation: string;  // String that determines whether user is trying to updat/add postoffice.

  private dialogTitle: string; // Title varies as per operation-performed.
  private postOfficeName: string;
  private PLZ: string;
  private officeNamePlaceholder: string;
  private postalCodePlaceholder: string;
  private dialogButtonText: string;  // String that is used to determine text of dialog-box button, varies as per operation performed.

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<AddUpdatePostOfficeDialogComponent>,
  ) { }

  ngOnInit() {
    if (this.data.type == 'Add') {
      this.dialogButtonText = 'Add';
      this.operation = 'Add';
      this.officeNamePlaceholder = 'Add Post Office';
      this.postalCodePlaceholder = 'Add Postal Code';
    }else {
      this.officeNamePlaceholder = "Edit Post Office";
      this.postalCodePlaceholder = 'Edit Postal Code';
      this.postOfficeName = this.data.defaultData.name;
      this.PLZ = this.data.defaultData.PLZ;
      this.operation = 'Edit';
      this.dialogButtonText = 'Update';
    }
  }

  addPostOffice() {
    this.dialogRef.close({ event: this.operation, data: { name: this.postOfficeName, PLZ: this.PLZ } });
  }
}
