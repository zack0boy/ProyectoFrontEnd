import { Component } from '@angular/core';
import { SiteFooter } from "../../component/site-footer/site-footer";
import { SiteHeader } from '../../component/site-header/site-header';
import { FormsModule } from '@angular/forms';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-consejomunicipal-page',
  standalone: true,
  imports: [
    SiteFooter,
    SiteHeader,
    FormsModule,
    NgForOf,
    HttpClientModule
  ],
  templateUrl: './consejomunicipal-page.html',
  styleUrls: ['./consejomunicipal-page.css']
})
export class ConsejomunicipalPage {
  nombre = '';
  opcionSeleccionada = '';
  opciones = ['deportes', 'eventos', 'cultura'];

  constructor(private http: HttpClient) {}

  enviarFormulario() {
    // Validación en consola
    if (!this.nombre || !this.opcionSeleccionada) {
      console.log('⚠️ Validación fallida: faltan campos');
      return;
    }

    const datos = {
      nombre: this.nombre,
      opcion: this.opcionSeleccionada
    };

    console.log('✅ Validación exitosa, enviando datos:', datos);

    // Envío con HttpClient
    this.http.post('http://localhost:3000/api/guardar', datos).subscribe({
      next: (res) => console.log('✅ Datos enviados con éxito:', res),
      error: (err) => console.error('❌ Error al enviar datos:', err)
    });
  }
}
