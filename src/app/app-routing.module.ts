import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
  path:"login",
  // canActivate: [usuarioSinLoguear],
   loadChildren: ()=> import('./../app/public/pages/login/login.module').then(m => m.LoginModule)
  },
  {
    path:"register",
    // canActivate: [usuarioSinLoguear],
     loadChildren: ()=> import('./../app/public/pages/register/register.module').then(m => m.RegisterModule)
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
