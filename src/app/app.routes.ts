import {Routes} from '@angular/router';
import {AccueilComponent} from './accueil/accueil.component';
import {GestionComponent} from './gestion/gestion.component';
import {ListeComponent} from './liste/liste.component';

export const routes: Routes = [
  {
    path: 'accueil',
    component: AccueilComponent,
    children: [
      { path: 'accueil-child', component: AccueilComponent }
    ]
  },
  {path: 'accueil', component: AccueilComponent},
  {path: 'gestion', component: GestionComponent},
  {path: 'liste', component: ListeComponent},
  {path: '', redirectTo: '/accueil', pathMatch: 'full'}, // redirige vers  l'url /accueil les url vide
  {path: '**', component: AccueilComponent} // redirige vers l'url /accueil les url inconnues
];
