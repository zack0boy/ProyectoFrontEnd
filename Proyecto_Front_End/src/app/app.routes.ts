import { Routes } from '@angular/router';
import { HomePage} from './pages/home-page/home-page';
import {TramitesPage} from './pages/tramites-page/tramites-page';


export const routes: Routes = [

  {path:'',component: HomePage},
  { path: 'tramites', component: TramitesPage },
  {path:'**', redirectTo:''},

];
