import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
  path:"login",
  // canActivate: [usuarioSinLoguear],
   loadChildren: ()=> import('./../app/pages/login/login.module').then(m => m.LoginModule)
  },
  {
    path:"register",
    // canActivate: [usuarioSinLoguear],
     loadChildren: ()=> import('./../app/pages/register/register.module').then(m => m.RegisterModule)
    },
    {
    path:"planes",
    // canActivate: [usuarioSinLoguear],
     loadChildren: ()=> import('./../app/pages/planes/planes.module').then(m => m.PlanesModule)
    },
    {
      path:"private",
      // canActivate: [usuarioSinLoguear],
       loadChildren: ()=> import('./private/private.module').then(m => m.PrivateModule)
    },
    {
      path:"conversor",
      // canActivate: [usuarioSinLoguear],
       loadChildren: ()=> import('./pages/conversor/conversor.module').then(m => m.ConversorModule)
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
