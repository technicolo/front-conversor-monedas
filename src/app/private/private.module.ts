import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrivateRoutingModule } from './private-routing.module';
import { PrivateComponent } from './private.component';
import { TabsComponent } from '../public/components/tabs/tabs.component';


@NgModule({
  declarations: [
    PrivateComponent,
    TabsComponent,
  ],
  imports: [
    CommonModule,
    PrivateRoutingModule
  ]
})
export class PrivateModule { }
