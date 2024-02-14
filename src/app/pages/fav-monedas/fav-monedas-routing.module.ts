import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavMonedasComponent } from './fav-monedas.component';

const routes: Routes =  [
  {
    path:"",
    component: FavMonedasComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FavMonedasRoutingModule { }
