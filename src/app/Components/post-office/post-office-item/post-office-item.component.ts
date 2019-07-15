import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { postOffice } from '../../../Interfaces/postOffice';
@Component({
  selector: 'app-post-office-item',
  templateUrl: './post-office-item.component.html',
  styleUrls: ['./post-office-item.component.scss']
})
export class PostOfficeItemComponent implements OnInit {

  @Input() postOffice: postOffice;
  @Output() updatePostOffice = new EventEmitter<postOffice>();
  @Output() deletePostOffice = new EventEmitter<number>();
  constructor() { }

  ngOnInit() {
  }

  updatePostOfficeEvent(postOffice) {
    this.updatePostOffice.emit(postOffice)
  }

  deletePostOfficeEvent(id) {
    console.log("called");
    this.deletePostOffice.emit(id);
  }
}