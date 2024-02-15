import { Component, WritableSignal, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { Conversion } from 'src/app/interfaces/conversion';
import { Currency } from 'src/app/interfaces/currency';
import { AuthService } from 'src/app/services/auth.service';
import { ConversionService } from 'src/app/services/conversion.service';
import { CurrencyService } from 'src/app/services/currency.service';
import { SubscriptionService } from 'src/app/services/subscription.service';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent {
  // Inyección de servicios
  conversionService = inject(ConversionService)
  currencyService = inject(CurrencyService)
  router = inject(Router);
  auth = inject(AuthService);
  subscriptionService = inject(SubscriptionService);

  userService = inject(UserService);

  // Señales y variables para el manejo del estado
  errorConverting: WritableSignal<boolean> = signal(false)
  cargando: WritableSignal<boolean> = signal(false);
  currencies: Currency[] = [];
  favoriteCurrenciesSet: Set<number> = new Set();
  userId: number | null = 0;
  amountOfConversionsDone: number = 0;
  availableConversions: number | undefined = 0;
  remainingConversions: number = 0;

  

  conversionResult: number = 0;
  
  user: User= {
    id: 0,
    username: '',
    email: '',
    firstName: '',
    lastName: '',
    subscriptionId: 0,
  }

  conversion: Conversion = {
    userId: 0,
    sourceCurrencyId: 0,
    targetCurrencyId: 0,
    originalAmount: 0,
    sourceCurrencyName: '',
    targetCurrencyName: '',
    convertedAmount: 0,
    date: new Date()
  }   
  
  // Método que se ejecuta al iniciar el componente
  async ngOnInit() {
    try {
      // Obtener el ID del usuario autenticado
      this.userId = this.auth.getUserId();
      console.log('ID USUARIO'+this.userId);
      // Si hay un usuario autenticado, obtener su información de suscripción
      if (this.userId !== null) {
        this.user = await this.userService.getUserById(this.userId)
        
        // Si el usuario tiene una suscripción, obtener la cantidad de conversiones disponibles
        console.log('USUARIO SUSCRIPCION ID '+this.user.subscriptionId);
        
        if (this.user.subscriptionId !== undefined) {
          this.availableConversions = await this.subscriptionService.getSubscriptionAmountOfConversions(this.user.subscriptionId);
          console.log('CONVERSIONES DISPONIBLES '+this.availableConversions);
          await this.actualizarConversionesRestantes();
          console.log('CONVERSIONES RESTANTES '+this.remainingConversions);
        }
      }
      // Asigno las monedas por defecto para que aparezcan en el select
      this.conversion.sourceCurrencyId = this.currencies[0].id;
      this.conversion.targetCurrencyId = this.currencies[1].id;
    } catch (error) {
      console.log(error);
    }
  }

  // Actualizar la cantidad de conversiones restantes
  async actualizarConversionesRestantes() {
    this.amountOfConversionsDone = await this.conversionService.getAmountOfConversions();

    if (this.availableConversions  !== undefined) {
      this.remainingConversions = this.availableConversions - this.amountOfConversionsDone;
    } 
    return 0;
  }
}