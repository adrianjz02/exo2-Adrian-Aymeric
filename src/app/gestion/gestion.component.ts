import { Component, OnInit } from '@angular/core';
import {FormServiceService} from '../service/form-service.service';
import {NgIf, NgOptimizedImage} from '@angular/common';
import {ErreurComponent} from '../erreur/erreur.component';

@Component({
  selector: 'app-gestion',
  templateUrl: './gestion.component.html',
  styleUrls: ['./gestion.component.css'],
  imports: [
    NgIf,
    NgOptimizedImage,
    ErreurComponent
  ]
})
export class GestionComponent implements OnInit {
  formData: any = null;

  constructor(private formDataService: FormServiceService) {
  }

  ngOnInit(): void {
    // Récupération des données sauvegardées
    this.formData = this.formDataService.getFormData();
  }
}
