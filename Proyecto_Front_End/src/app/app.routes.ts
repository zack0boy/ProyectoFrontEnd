import { Routes } from '@angular/router';
import { HomePage} from './pages/home-page/home-page';
import {TramitesPage} from './pages/tramites-page/tramites-page';
import {ConsejomunicipalPage} from './pages/consejomunicipal-page/consejomunicipal-page';

export const routes: Routes = [

  {path:'',component: HomePage},
  {path :'principal',component : HomePage},
  { path: 'tramites', component: TramitesPage },
  {path: 'consejo',component: ConsejomunicipalPage },
  {path:'**', redirectTo:''},

];
