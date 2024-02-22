import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { usuarioLogueadoGuard } from './guards/usuario-logueado.guard';
import { usuarioSinLoguear } from './guards/usuario-sin-loguear.guard';

const routes: Routes = [

    {
      path:"private",
      
       loadChildren: ()=> import('./private/private.module').then(m => m.PrivateModule)
    },
    {
      path:"start",
      
       loadChildren: ()=> import('./start/start.module').then(m => m.StartModule)
    },
    {
      path: "",
      redirectTo: '/start/login',
      pathMatch: "full"
    },
    {
      path:"**",
      loadChildren: ()=> import('./pages/error/error.module').then(m => m.ErrorModule)
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
