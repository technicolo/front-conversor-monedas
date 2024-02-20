import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrivateComponent } from './private.component';
import { usuarioSinLoguear } from '../guards/usuario-sin-loguear.guard';
import { usuarioLogueadoGuard } from '../guards/usuario-logueado.guard';

const routes: Routes = [  {
  path:"",
  component: PrivateComponent,
  children:[
    {
      path:"main-menu",
      canActivate: [usuarioLogueadoGuard],
       loadChildren: ()=> import('./../pages/main-menu/main-menu.module').then(m => m.MainMenuModule)
      },
      {
        path:"conversor",
        canActivate: [usuarioLogueadoGuard],
         loadChildren: ()=> import('./../pages/conversor/conversor.module').then(m => m.ConversorModule)
      },
      {
        path:"fav-monedas",
        canActivate: [usuarioLogueadoGuard],
        loadChildren: ()=> import('./../pages/fav-monedas/fav-monedas.module').then(m => m.FavMonedasModule)
      },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateRoutingModule { }
