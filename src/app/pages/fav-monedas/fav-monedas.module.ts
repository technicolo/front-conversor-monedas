import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FavMonedasRoutingModule } from './fav-monedas-routing.module';
import { FavMonedasComponent } from './fav-monedas.component';
import { FavoriteCurrenciesListComponent } from "../../public/components/favorite-currencies-list/favorite-currencies-list.component";
import { FormsModule } from '@angular/forms';


@NgModule({
    declarations: [
        FavMonedasComponent
    ],
    imports: [
        CommonModule,
        FavMonedasRoutingModule,
        FavoriteCurrenciesListComponent,
        FormsModule
    ]
})
export class FavMonedasModule { }
