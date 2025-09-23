import { Component } from '@angular/core';
import { SiteFooter } from "../../component/site-footer/site-footer";
import { HeaderComponent } from '../../component/site-header/site-header';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tramites-page',
  standalone: true,
  imports: [
    SiteFooter,
    FormsModule,
    [CommonModule],
    HeaderComponent
],
  templateUrl: './tramites-page.html',
  styleUrl: './tramites-page.css'
})
export class TramitesPage {
  busquedaTramite: string = '';
  busquedaValida: boolean = false;

  // Validación básica
  buscarTramite() {
    if (!this.busquedaTramite.trim()) {
      alert('Por favor ingrese el nombre del trámite a buscar.');
      this.busquedaValida = false;
      return;
    }
    console.log('Trámite buscado:', this.busquedaTramite);
    this.busquedaValida = true; // habilita la sección de pedir hora
  }

  // Acción para pedir hora (puedes conectarlo a tu lógica)
  pedirHora() {
    alert(`Se solicitó hora para el trámite: ${this.busquedaTramite}`);
    console.log('Hora solicitada para:', this.busquedaTramite);
    // aquí podrías redirigir o abrir modal según tu flujo
  }
}
