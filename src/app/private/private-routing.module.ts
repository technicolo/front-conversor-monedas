import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrivateComponent } from './private.component';

const routes: Routes = [  {
  path:"",
  component: PrivateComponent,
  children:[
    {
      path:"main-menu",
      // canActivate: [usuarioSinLoguear],
       loadChildren: ()=> import('./../pages/main-menu/main-menu.module').then(m => m.MainMenuModule)
      },
      {
        path:"conversor",
        // canActivate: [usuarioSinLoguear],
         loadChildren: ()=> import('./../pages/conversor/conversor.module').then(m => m.ConversorModule)
      },
      {
        path:"fav-monedas",
        loadChildren: ()=> import('./../pages/fav-monedas/fav-monedas.module').then(m => m.FavMonedasModule)
      },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateRoutingModule { }
