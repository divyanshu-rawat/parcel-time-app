import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { ConfirmationalDialogComponent } from '../../Components/shared-components/confirmational-dialog/confirmational-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private dialog: MatDialog) { }

  public openConfirmationDialog() {
    const dialogRef = this.dialog.open(ConfirmationalDialogComponent, {
      width: '300px',
      data: { dialogTitle: 'Delete Post Office', dialogText: "Are you sure?" }
    });
    return dialogRef;
  }
}
