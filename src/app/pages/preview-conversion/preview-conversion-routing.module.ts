import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PreviewConversionComponent } from './preview-conversion.component';



const routes: Routes = [
  {
    path:"",
    component: PreviewConversionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PreviewConversionRoutingModule { }
