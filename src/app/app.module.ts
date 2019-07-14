import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShipmentComponent } from './Components/shipment/shipment.component';
import { PostOfficeComponent } from './Components/post-office/post-office.component';
import { AppHeaderComponent } from './Components/app-header/app-header.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

// Mat Modules
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from "@angular/material";
import { MatButtonModule } from '@angular/material';

import { HttpClientModule } from '@angular/common/http';

// Module for pagination.
import { NgxPaginationModule } from 'ngx-pagination';
import { ConfirmationalDialogComponent } from './Components/shared-components/confirmational-dialog/confirmational-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    ShipmentComponent,
    PostOfficeComponent,
    AppHeaderComponent,
    ConfirmationalDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    HttpClientModule,
    NgxPaginationModule,
    MatDialogModule,
    NoopAnimationsModule,
    MatButtonModule
  ],
  entryComponents: [
    ConfirmationalDialogComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
