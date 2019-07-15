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
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';

// Module for https requests.
import { HttpClientModule } from '@angular/common/http';

// Module for pagination.
import { NgxPaginationModule } from 'ngx-pagination';
import { ConfirmationalDialogComponent } from './Components/shared-components/confirmational-dialog/confirmational-dialog.component';
import { AddUpdatePostOfficeDialogComponent } from './Components/shared-components/add-update-post-office-dialog/add-update-post-office-dialog.component';
import { AddUpdateShipmentDialogComponent } from './Components/shared-components/add-update-shipment-dialog/add-update-shipment-dialog.component';

// Module for Filtering.
import { Ng2SearchPipeModule } from 'ng2-search-filter'

@NgModule({
  declarations: [
    AppComponent,
    ShipmentComponent,
    PostOfficeComponent,
    AppHeaderComponent,
    ConfirmationalDialogComponent,
    AddUpdatePostOfficeDialogComponent,
    AddUpdateShipmentDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    HttpClientModule,
    NgxPaginationModule,
    MatDialogModule,
    NoopAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatSelectModule,
    MatRadioModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule
  ],
  entryComponents: [
    ConfirmationalDialogComponent,
    AddUpdatePostOfficeDialogComponent,
    AddUpdateShipmentDialogComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
