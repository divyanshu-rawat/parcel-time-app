import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShipmentComponent } from './Components/shipment/shipment.component';
import { PostOfficeComponent } from './Components/post-office/post-office.component';

@NgModule({
  declarations: [
    AppComponent,
    ShipmentComponent,
    PostOfficeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
