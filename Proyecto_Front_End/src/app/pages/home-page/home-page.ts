import { Component } from '@angular/core';
import { SiteContent} from '../../component/site-content/site-content';
import { SiteFooter } from '../../component/site-footer/site-footer';
// Adjust the import to match the actual export from site-header, for example:
import { HeaderComponent } from '../../component/site-header/site-header';
@Component({
  imports: [HeaderComponent, SiteFooter, SiteContent],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css'
})
export class HomePage {

}
