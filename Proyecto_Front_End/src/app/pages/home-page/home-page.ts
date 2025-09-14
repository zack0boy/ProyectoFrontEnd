import { Component } from '@angular/core';
import { SiteContent} from '../../component/site-content/site-content';
import { SiteFooter } from '../../component/site-footer/site-footer';
import { SiteHeader } from '../../component/site-header/site-header';
@Component({
  selector: 'app-home-page',
  imports: [SiteHeader,SiteFooter,SiteContent],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css'
})
export class HomePage {

}
