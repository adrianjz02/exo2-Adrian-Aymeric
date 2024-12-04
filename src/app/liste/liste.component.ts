import { Component } from '@angular/core';
import {NgForOf, NgIf, NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-liste',
  imports: [
    NgForOf,
    NgIf,
    NgOptimizedImage
  ],
  templateUrl: './liste.component.html',
  styleUrl: './liste.component.css'
})
export class ListeComponent {
  films = [
    { title: 'Inception', poster: 'https://via.placeholder.com/150?text=Inception' },
    { title: 'The Matrix', poster: 'https://via.placeholder.com/150?text=The+Matrix' },
    { title: 'Interstellar', poster: 'https://via.placeholder.com/150?text=Interstellar' },
    { title: 'The Dark Knight', poster: 'https://via.placeholder.com/150?text=The+Dark+Knight' },
    { title: 'Pulp Fiction', poster: 'https://via.placeholder.com/150?text=Pulp+Fiction' },
  ];

  // Film sélectionné
  selectedFilm: { title: string; poster: string } | null = null;

  onSelectFilm(film: { title: string; poster: string }) {
    this.selectedFilm = film;
  }
}
