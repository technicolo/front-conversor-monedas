import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartComponent } from './start.component';

const routes: Routes = [  {
  path:"",
  component: StartComponent,
  children:[
    {
      path:"login",
      // canActivate: [usuarioSinLoguear],
       loadChildren: ()=> import('./../pages/login/login.module').then(m => m.LoginModule)
      },
      {
        path:"register",
        // canActivate: [usuarioSinLoguear],
         loadChildren: ()=> import('./../pages/register/register.module').then(m => m.RegisterModule)
        },
        {
        path:"planes",
        // canActivate: [usuarioSinLoguear],
         loadChildren: ()=> import('./../pages/planes/planes.module').then(m => m.PlanesModule)
        },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StartRoutingModule { }
