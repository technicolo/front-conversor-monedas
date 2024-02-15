import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainMenuRoutingModule } from './main-menu-routing.module';
import { MainMenuComponent } from './main-menu.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MainMenuComponent
  ],
  imports: [
    CommonModule,
    MainMenuRoutingModule,
    FormsModule
  ]
})
export class MainMenuModule { }
