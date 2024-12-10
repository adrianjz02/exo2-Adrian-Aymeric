import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormServiceService {
  private lastFormData: any = null;

  constructor() {}

  // Méthode pour définir les données du formulaire
  setFormData(data: any): void {
    this.lastFormData = data;
  }

  // Méthode pour récupérer les données du formulaire
  getFormData(): any {
    return this.lastFormData;
  }
}
