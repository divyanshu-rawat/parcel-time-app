import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostOfficeComponent } from './Components/post-office/post-office.component';
import { ShipmentComponent } from './Components/shipment/shipment.component';

const routes: Routes = [
  {
    path: '',
    component: PostOfficeComponent
  },
  {
    path: 'shipments',
    component: ShipmentComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
