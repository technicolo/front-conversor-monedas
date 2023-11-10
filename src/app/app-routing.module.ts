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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
