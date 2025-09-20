import { Component } from '@angular/core';
import {SiteFooter} from "../../component/site-footer/site-footer";
import {SiteHeader} from '../../component/site-header/site-header';

@Component({
  selector: 'app-consejomunicipal-page',
  imports: [
    SiteFooter,
    SiteHeader
  ],
  templateUrl: './consejomunicipal-page.html',
  styleUrl: './consejomunicipal-page.css'
})
export class ConsejomunicipalPage {

}
