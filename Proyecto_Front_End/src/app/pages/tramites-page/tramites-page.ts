import { Component } from '@angular/core';
import {SiteFooter} from "../../component/site-footer/site-footer";
import {SiteHeader} from '../../component/site-header/site-header';

@Component({
  selector: 'app-tramites-page',
  imports: [
    SiteFooter,
    SiteHeader
  ],
  templateUrl: './tramites-page.html',
  styleUrl: './tramites-page.css'
})
export class TramitesPage {

}
