import { Component, OnInit } from '@angular/core';
import { PostOfficeService } from '../../Services/post-office-service/post-office.service';
import { postOffice } from '../../Interfaces/postOffice';

@Component({
  selector: 'app-post-office',
  templateUrl: './post-office.component.html',
  styleUrls: ['./post-office.component.scss']
})
export class PostOfficeComponent implements OnInit {

  private postOffices: postOffice[] = [];
  constructor(private postOfficeService: PostOfficeService) { }

  ngOnInit() {
    this.getPostOffices();
  }

  private getPostOffices() {
    this.postOfficeService.getPostOffices().subscribe(postOffices => {
      console.log("postOffices", postOffices);
      this.postOffices = postOffices;
    });
  }
}
