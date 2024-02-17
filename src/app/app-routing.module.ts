import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

    {
      path:"private",
      // canActivate: [usuarioSinLoguear],
       loadChildren: ()=> import('./private/private.module').then(m => m.PrivateModule)
    },
    {
      path:"start",
      // canActivate: [usuarioSinLoguear],
       loadChildren: ()=> import('./start/start.module').then(m => m.StartModule)
    },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
