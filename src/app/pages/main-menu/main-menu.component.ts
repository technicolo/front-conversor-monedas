import { Component, WritableSignal, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { Conversion } from 'src/app/interfaces/conversion';
import { Currency } from 'src/app/interfaces/currency';
import { AuthService } from 'src/app/services/auth.service';
import { ConversionService } from 'src/app/services/conversion.service';
import { CurrencyService } from 'src/app/services/currency.service';
import { SubscriptionService } from 'src/app/services/subscription.service';
import { User, UserSubscription } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';
import { ISubscription } from 'src/app/interfaces/subscription';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent {
   // Inyección de servicios
   router = inject(Router);
   auth = inject(AuthService);
   userService = inject(UserService);
   currencyService = inject(CurrencyService);
   subscriptionService = inject(SubscriptionService);
   conversionService = inject(ConversionService);
 
 
   // Señales y variables para el manejo del estado
   userId: number | null = 0;
   amountOfConversionsDone: number = 0;
   availableConversions: number | undefined = 0;
   remainingConversions: number = 0;
   favoriteCurrencies: WritableSignal<Currency[]> = signal([]);
   noFavoriteCurrencies: WritableSignal<Currency[]> = signal([]);
   conversions: WritableSignal<Conversion[]> = signal([]);
   subscriptions: WritableSignal<ISubscription[]> = signal([]);
   editingMode = signal(false);
   p1: number = 1;
   p2: number = 1;
 
   user: UserSubscription = {
     subscriptionId: 0
   }
 
   // Suscripción seleccionada
   subscription: ISubscription = {
     id: 0,
     name: "",
     amountOfConversions: 0,
     price: "",
   };
 
   async ngOnInit() {

 
     // Lista de monedas no favoritas
     await this.getNonFavoriteCurrencies();
 
     // Lista de conversiones realizadas
     this.conversionService.getAllConversions().then(res => {
       this.conversions.set(res);
       console.log(this.conversions());
     })
     // Suscripciones
     this.subscriptionService.getAll().then(res => {
       this.subscriptions.set(res);
       console.log(this.subscriptions);
     })
 
     // Obtener el ID del usuario autenticado
     this.userId = this.auth.getUserId();
 
     // Si hay un usuario autenticado, obtener su información de suscripción
     if (this.userId !== null) {
       this.user = await this.userService.getUserById(this.userId)
 
       // Si el usuario tiene una suscripción, obtener la cantidad de conversiones disponibles
       if (this.user.subscriptionId !== undefined) {
         this.availableConversions = await this.subscriptionService.getSubscriptionAmountOfConversions(this.user.subscriptionId);
         const subscription = await this.subscriptionService.getSubscriptionById(this.user.subscriptionId);
         if (subscription !== undefined) {
           this.subscription = subscription;
         }
         await this.actualizarConversionesRestantes();
       }
     }
     this.subscription.name = this.subscription.name;
   }
 
   //#region Conversiones
   // Actualizar la cantidad de conversiones restantes
   async actualizarConversionesRestantes() {
     this.amountOfConversionsDone = await this.conversionService.getAmountOfConversions();
 
     if (this.availableConversions !== undefined) {
       this.remainingConversions = this.availableConversions - this.amountOfConversionsDone;
     }
     return 0;
   }


   async getNonFavoriteCurrencies() {
     try {
       // Obtener todas las monedas
       const allCurrencies = await this.currencyService.getAllCurrencies();
 
       // Obtener las monedas favoritas
       const favoriteCurrencies = await this.currencyService.getFavoriteCurrencies();
 
       // Filtrar las monedas que no son favoritas
       this.noFavoriteCurrencies.set(allCurrencies.filter(currency =>
         !favoriteCurrencies.some(favCurrency => favCurrency.id === currency.id)
       ));
 
       console.log(this.noFavoriteCurrencies);
     } catch (error) {
       console.error('Error al obtener las monedas no favoritas:', error);
     }
   }
 
   async fetchCurrencies() {
     this.currencyService.getFavoriteCurrencies().then(res => { this.favoriteCurrencies.set(res) });
     await this.getNonFavoriteCurrencies()
   }
   //#endregion
 }
 