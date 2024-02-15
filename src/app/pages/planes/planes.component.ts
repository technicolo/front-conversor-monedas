import { Component, OnInit, inject } from '@angular/core';
import { SubscriptionService } from 'src/app/services/subscription.service';
import { UserService } from 'src/app/services/user.service';
import { ISubscription } from 'src/app/interfaces/subscription';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { UserSubscription } from 'src/app/interfaces/user';
import { ConversionService } from 'src/app/services/conversion.service';

@Component({
  selector: 'app-planes',
  templateUrl: './planes.component.html',
  styleUrls: ['./planes.component.scss']
})
export class PlanesComponent implements OnInit {
  // Lista de suscripciones disponibles
  subscriptions: ISubscription[] = [];

  // Servicios inyectados
  authService = inject(AuthService);
  subscriptionService = inject(SubscriptionService);
  userService = inject(UserService);
  router = inject(Router);
  conversionService = inject(ConversionService);

  userId: number | null = 0;
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

  retrocederPagina(): void {
    window.history.go(-1);
  }

  getSubscriptionClass(subscription: ISubscription): string {
    // Utiliza el nombre de la suscripción para determinar la clase dinámica
    switch (subscription.name) {
        case 'Pro':
            return 'pro-plan';
        case 'Free':
            return 'free-plan';
        case 'Trial':
            return 'trial-plan';
        default:
            return ''; 
    }
}

  // Método que se ejecuta al iniciar el componente
  async ngOnInit() {
    // Obtener todas las suscripciones disponibles
    this.subscriptionService.getAll().then((res) => {
      this.subscriptions = res;
      console.log(this.subscriptions);
    });

    // Obtener el ID del usuario autenticado
    this.userId = this.authService.getUserId();
    console.log('ID DE USUARIO'+this.userId);
    // Si hay un usuario autenticado, obtener su información de suscripción
    if (this.userId !== null) {
      this.user = await this.userService.getUserById(this.userId)
      console.log('USUARIO SUSCRIPCION ID '+this.user.subscriptionId);
    }
  }
  


  async editUserSubscription(subscriptionId: number) {
    // Obtener el ID del usuario autenticado
    const userId = this.authService.getUserId();

    // Obtener detalles de la suscripción seleccionada
    const subscription = await this.subscriptionService.getSubscriptionById(subscriptionId);
    const subscriptionName = subscription?.name;

    // Manejar el caso de un usuario no autenticado
    if (!userId) return;

    Swal.fire({
      title: 'Has seleccionado la suscripción ' + subscriptionName,
      showCancelButton: true,
      confirmButtonColor: '#5E807F',
      cancelButtonColor: '#b7b7b7',
      cancelButtonText: 'Volver',
      confirmButtonText: 'Continuar',
    }).then((result) => {
      // Si el usuario confirma, realizar la edición de la suscripción
      if (result.isConfirmed) {
        this.userService.editUserSubscription(userId, subscriptionId).then((res) => {
          if (res) {
            // Redirigir al usuario a la página de inicio de sesión
            this.router.navigate(['/private/conversor']);
          } else {
            // Mostrar un mensaje de error en caso de fallo
            Swal.fire(
              'Ha ocurrido un error al seleccionar tu suscripción',
              'Intenta nuevamente.',
              'error'
            );
          }
        });
      }
    });
  }
}