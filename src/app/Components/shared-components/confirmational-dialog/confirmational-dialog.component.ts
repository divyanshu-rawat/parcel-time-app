import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
@Component({
  selector: 'app-confirmational-dialog',
  templateUrl: './confirmational-dialog.component.html',
  styleUrls: ['./confirmational-dialog.component.sass']
})
export class ConfirmationalDialogComponent implements OnInit {

  private dialogTitle: string;
  private dialogText: string;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    this.dialogTitle = this.data.dialogTitle;
    this.dialogText = this.data.dialogText;
  }
}
