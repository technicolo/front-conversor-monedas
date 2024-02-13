import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PreviewConversionRoutingModule } from './preview-conversion-routing.module';
import { PreviewConversionComponent } from './preview-conversion.component';


@NgModule({
  declarations: [
    PreviewConversionComponent
  ],
  imports: [
    CommonModule,
    PreviewConversionRoutingModule
  ]
})
export class PreviewConversionModule { }
