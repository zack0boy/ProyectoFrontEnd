import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Title } from '@angular/platform-browser';



/* Removed duplicate SiteContent class definition */

export interface Post {
  id: number;
  title: { rendered: string };
  excerpt: { rendered: string };
  date: string;
  link: string;
  _embedded?: {
    'wp:featuredmedia'?: { source_url: string }[];
  };
}

@Component({
  selector: 'app-site-content',
  standalone: true,
  imports: [CommonModule],
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

  // Noticias API
  posts: Post[] = [];
  cargando = false;
  errorMsg = '';

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.cargarNoticias();
  }

  // Slider banner
  siguiente() {
    this.indexActual = (this.indexActual + 1) % this.textos.length;
  }

  anterior() {
    this.indexActual = (this.indexActual - 1 + this.textos.length) % this.textos.length;
  }

  // Slider horizontal de noticias
  getImagenPost(post: Post): string {
    if (post._embedded?.['wp:featuredmedia']?.[0]?.source_url) {
      return post._embedded['wp:featuredmedia'][0].source_url;
    }
    return 'https://via.placeholder.com/400x200?text=Sin+Imagen';
  }

  slideSiguiente() {
    const container = document.querySelector('.slider-container') as HTMLElement;
    if (container) {
      const card = container.querySelector('.card') as HTMLElement;
      if (card) container.scrollBy({left: card.offsetWidth + 20, behavior: 'smooth'});
    }
  }

  slideAnterior() {
    const container = document.querySelector('.slider-container') as HTMLElement;
    if (container) {
      const card = container.querySelector('.card') as HTMLElement;
      if (card) container.scrollBy({left: -(card.offsetWidth + 20), behavior: 'smooth'});
    }
  }

  // Cargar noticias desde WordPress
  cargarNoticias() {
    this.cargando = true;
    this.http.get<Post[]>('https://impa.gob.cl/wpes/wp-json/wp/v2/posts?_embed')
      .subscribe({
        next: data => {
          // Ordenar por fecha descendente
          this.posts = data.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
          this.cargando = false;
        },
        error: err => {
          console.error("Error cargando noticias", err);
          this.errorMsg = "No se pudieron cargar las noticias.";
          this.cargando = false;
        }
      });
  }
}

