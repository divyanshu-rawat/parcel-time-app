import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShipmentComponent } from './Components/shipment/shipment.component';
import { PostOfficeComponent } from './Components/post-office/post-office.component';
import { AppHeaderComponent } from './Components/app-header/app-header.component';

// Module for matIcons.
import { MatIconModule } from '@angular/material/icon';

import { HttpClientModule } from '@angular/common/http';

// Module for pagination.
import { NgxPaginationModule } from 'ngx-pagination'
@NgModule({
  declarations: [
    AppComponent,
    ShipmentComponent,
    PostOfficeComponent,
    AppHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
