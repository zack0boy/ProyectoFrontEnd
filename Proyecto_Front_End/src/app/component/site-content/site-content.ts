import { Component } from '@angular/core';

@Component({
  selector: 'app-site-content',
  standalone: true,
  templateUrl: './site-content.html',
  styleUrls: ['./site-content.css']
})
export class SiteContent {

  // Array de textos con título y subtítulo
  textos: {titulo: string, subtitulo: string}[] = [
    {
      titulo: "Bienvenidos",
      subtitulo: "Bienvenidos a nuestra nueva y renovada página web donde podrás encontrar todo lo referente a nuestra comuna y municipalidad, como los trámites en línea de permisos de circulación,\n" +
        "        patentes comerciales y DOM, además de revisar las noticias más relevantes, las organizaciones comunitarias, seguridad ciudadana y mucho más."
    },
    {
      titulo: "PozoAlmonte",
      subtitulo: "Está ubicado a más de 50 kilómetros desde la ciudad de Iquique, en plena Pampa del Tamarugal, cuenta con distintos atractivos turísticos en su abanico de destinos.\n" +
        "        Imprescindibles como las ex oficinas salitreras Humberstone y Santa Laura, ambas declaradas Monumentos Nacionales desde el año 1970 y Patrimonio Cultural de la Humanidad desde el 2005."
    }
  ];

  indexActual: number = 0;

  siguiente() {
    this.indexActual = (this.indexActual + 1) % this.textos.length;
  }

  anterior() {
    this.indexActual = (this.indexActual - 1 + this.textos.length) % this.textos.length;
  }

}
