import { Component, OnInit, OnDestroy } from '@angular/core';
import { PostOfficeService } from '../../Services/post-office-service/post-office.service';
import { postOffice } from '../../Interfaces/postOffice';
import { DialogService } from '../../Services/shared-services/dialog.service';

/**
 * PostOffice Component
 * Component responsible for all the interactions happening in post office route.
 * For Instance CRUD Opeartions, triggering dailogs, pagination logic.
 */


@Component({
  selector: 'app-post-office',
  templateUrl: './post-office.component.html',
  styleUrls: ['./post-office.component.scss']
})
export class PostOfficeComponent implements OnInit, OnDestroy {

  private p: number = 1;
  private postOffices: postOffice[] = [];

  // subscriptions;
  private deletePostOfficeSubscription;
  private updatePostOfficeSubscription;
  private addPostOfficeSubscription;

  constructor(private postOfficeService: PostOfficeService, private dialogService: DialogService) { }

  ngOnInit() {
    // Fetching psotOffices on component mount/init.
    this.getPostOffices();
  }

  ngOnDestroy() {
    /*
      Unsubscribing all the subscriptions on component destroy,  
      ensuring good practises and performance improvements.
    */
    if (this.deletePostOfficeSubscription) {
      this.deletePostOfficeSubscription.unsubscribe();
    }
    if (this.updatePostOfficeSubscription) {
      this.updatePostOfficeSubscription.unsubscribe();
    }
    if (this.addPostOfficeSubscription) {
      this.addPostOfficeSubscription.unsubscribe();
    }
  }

  // Leverages postOfficeService to get postOffice data from rest-api.
  private getPostOffices(): void {
    this.postOfficeService.getPostOffices().subscribe(postOffices => {
      this.postOffices = postOffices;
    });
  }
  // Leverages postOfficeService to delete postOffice data from rest-api. 
  private deletePostOffice(id: string): void {
    const dialogRef = this.dialogService.openConfirmationDialog("office");
    this.deletePostOfficeSubscription = dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.postOfficeService.deletePostOffice(id).subscribe(postoffices => {
          this.postOffices = postoffices;
        });
      }
    });
  }
  //  Leverages postOfficeService to add postOffice data from rest-api.
  private addNewPostOffice(): void {
    const dialogRef = this.dialogService.openPostOfficeDialog();
    this.addPostOfficeSubscription = dialogRef.afterClosed().subscribe(result => {
      if (result) {
        if (result.event == 'Add') {
          this.postOfficeService.addPostOffice(result.data).subscribe(postoffices => {
            this.postOffices = postoffices;
          });
        }
      }
    });
  }
  //  Leverages postOfficeService to get postOffice update from rest-api.
  private updatePostOffice(postOffice: postOffice): void {
    const dialogRef = this.dialogService.openPostOfficeDialog(postOffice);
    this.updatePostOfficeSubscription = dialogRef.afterClosed().subscribe(result => {
      if (result) {
        if (result.event == 'Edit') {
          this.postOfficeService.updatePostOffice(postOffice.id, result.data).subscribe(postoffices => {
            this.postOffices = postoffices;
          });
        }
      }
    });
  }

}
