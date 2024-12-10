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
    { title: 'Inception', poster: 'https://www.screentune.com/wp-content/uploads/2023/10/Critique-Inception-2010-ScreenTune.jpg' },
    { title: 'The Matrix', poster: 'https://media.wired.com/photos/5ca648a330f00e47fd82ae77/master/pass/Culture_Matrix_Code_corridor.jpg' },
    { title: 'Interstellar', poster: 'https://medias.futurhebdo.net/wp-content/uploads/2021/09/A1Tghhn5UIL._AC_SL1500_.jpg' },
    { title: 'The Dark Knight', poster: 'https://fr.web.img2.acsta.net/medias/nmedia/18/63/97/89/18949761.jpg' },
    { title: 'Pulp Fiction', poster: 'https://static.posters.cz/image/1300/affiches-et-posters/pulp-fiction-guns-i137395.jpg' },
  ];

  // Film sélectionné
  selectedFilm: { title: string; poster: string } | null = null;

  onSelectFilm(film: { title: string; poster: string }) {
    this.selectedFilm = film;
  }
}
