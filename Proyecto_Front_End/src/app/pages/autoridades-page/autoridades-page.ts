import { Component } from '@angular/core';
import { HeaderComponent } from "../../component/site-header/site-header";
import { SiteFooter } from "../../component/site-footer/site-footer";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-autoridades',
  standalone: true,
  imports: [HeaderComponent, SiteFooter, CommonModule],
  templateUrl: './autoridades-page.html',
  styleUrls: ['./autoridades-page.css']
})
export class AutoridadesComponent {

  alcalde = [{
    nombreAlcalde: 'Richard Godoy',
    imgAlcalde:'https://impa.gob.cl/wpes/wp-content/uploads/2024/05/alcalde.jpeg'
    }
  ];


  concejales = [
    {
      nombre: 'Osvaldo Chandia',
      img: 'https://impa.gob.cl/wpes/wp-content/uploads/2024/05/WhatsApp-Image-2024-05-06-at-12.01.17-PM.jpeg'
    },
    {
      nombre: 'Iván Moscoso',
      img: 'https://impa.gob.cl/wpes/wp-content/uploads/2024/05/WhatsApp-Image-2024-05-06-at-12.01.17-PM-2.jpeg'
    },
    {
      nombre: 'Julia Encina',
      img: 'https://impa.gob.cl/wpes/wp-content/uploads/2025/01/Concejal-Julia-Encina.png'
    },
    {
      nombre: 'Marcelo Nacarino',
      img: 'https://impa.gob.cl/wpes/wp-content/uploads/2024/05/WhatsApp-Image-2024-05-06-at-12.01.17-PM-1.jpeg'
    },
    {
      nombre: 'Francisco Cáceres',
      img: 'https://impa.gob.cl/wpes/wp-content/uploads/2025/01/Concejal-Francisco.png'
    },
    {
      nombre: 'Francisco Osorio',
      img: 'https://impa.gob.cl/wpes/wp-content/uploads/2024/05/WhatsApp-Image-2024-05-06-at-12.01.16-PM-1-1.jpeg'
    }
  ];
}
