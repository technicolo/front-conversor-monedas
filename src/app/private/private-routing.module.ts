import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrivateComponent } from './private.component';

const routes: Routes = [  {
  path:"",
  component: PrivateComponent,
  children:[
    {
      path:"private/app-main-menu",
      // canActivate: [usuarioSinLoguear],
       loadChildren: ()=> import('./../pages/main-menu/main-menu.module').then(m => m.MainMenuModule)
      },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateRoutingModule { }
