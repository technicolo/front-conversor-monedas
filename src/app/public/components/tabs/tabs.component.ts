import { Component } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent {
navegar(direccion:string){
  //cambiar de pagina
  console.log(direccion)
}
}
