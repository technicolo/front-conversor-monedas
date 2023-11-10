import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlanesRoutingModule } from './planes-routing.module';
import { PlanesComponent } from './planes.component';


@NgModule({
  declarations: [
    PlanesComponent
  ],
  imports: [
    CommonModule,
    PlanesRoutingModule
  ]
})
export class PlanesModule { }
