import { Component, OnInit } from '@angular/core';
import { PostOfficeService } from '../../Services/post-office-service/post-office.service';
import { postOffice } from '../../Interfaces/postOffice';
import { DialogService } from '../../Services/shared-services/dialog.service';

@Component({
  selector: 'app-post-office',
  templateUrl: './post-office.component.html',
  styleUrls: ['./post-office.component.scss']
})
export class PostOfficeComponent implements OnInit {

  private p: number = 1;
  private postOffices: postOffice[] = [];
  constructor(private postOfficeService: PostOfficeService, private dialogService: DialogService) { }

  ngOnInit() {
    this.getPostOffices();
  }

  private getPostOffices() {
    this.postOfficeService.getPostOffices().subscribe(postOffices => {
      console.log("postOffices", postOffices);
      this.postOffices = postOffices;
    });
  }

  private deletePostOffice(id) {
    const dialogRef = this.dialogService.openConfirmationDialog();
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.postOfficeService.deletePostOffice(id).subscribe(postoffices => {
          this.postOffices = postoffices;
        });
      }
    });
  }

  private addNewPostOffice() {
    const dialogRef = this.dialogService.openPostOfficeDialog();
    dialogRef.afterClosed().subscribe(result => {
      if(result.event == 'Add'){
        this.postOfficeService.addPostOffice(result.data).subscribe(postoffices => {
          this.postOffices = postoffices;
        });
      }
    });
  }
}
