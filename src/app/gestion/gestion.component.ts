import { Component } from '@angular/core';
import {FormServiceService} from './form-service.service';

@Component({
  selector: 'app-gestion',
  imports: [],
  templateUrl: './gestion.component.html',
  styleUrl: './gestion.component.css'
})
export class GestionComponent {
  formData: any = null;

  constructor(private formService: FormServiceService) {}

  ngOnInit(): void {
    // Récupérer les données du dernier formulaire
    this.formData = this.formService.getFormData();
  }
}
