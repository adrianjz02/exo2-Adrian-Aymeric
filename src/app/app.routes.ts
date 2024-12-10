import { Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { GestionComponent } from './gestion/gestion.component';
import { ListeComponent } from './liste/liste.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
  {
    path: 'accueil',
    component: AccueilComponent,
    children: [
      { path: 'accueil-child', component: AccueilComponent }
    ]
  },
  { path: 'gestion', component: GestionComponent },
  { path: 'liste', component: ListeComponent },
  { path: 'contact', component: ContactComponent },
  { path: '', redirectTo: '/accueil', pathMatch: 'full' }, // Redirection vers /accueil pour URL vide
  { path: '**', component: AccueilComponent } // Redirection des URL inconnues
];
