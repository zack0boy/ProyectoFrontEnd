import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePage } from './pages/home-page/home-page';
import { TramitesPage } from './pages/tramites-page/tramites-page';
import { ConsejomunicipalPage } from './pages/consejomunicipal-page/consejomunicipal-page';
import { AutoridadesComponent } from './pages/autoridades-page/autoridades-page'; // ajusta la ruta

export const routes: Routes = [
  { path: '', component: HomePage },
  { path: 'principal', component: HomePage },
  { path: 'tramites', component: TramitesPage },
  { path: 'consejo', component: ConsejomunicipalPage },
  { path: 'autoridades', component: AutoridadesComponent },
  { path: '**', redirectTo: '' }, // ruta comodín
  { path: 'autoridades', component: AutoridadesComponent }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      anchorScrolling: 'enabled',          // habilita scroll hacia fragmentos
      scrollPositionRestoration: 'enabled' // recuerda posición al navegar
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
