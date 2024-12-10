import { Component } from '@angular/core';
import {FormServiceService} from '../gestion/form-service.service';

@Component({
  selector: 'app-formulaire',
  imports: [],
  templateUrl: './formulaire.component.html',
  styleUrl: './formulaire.component.css'
})
export class FormulaireComponent {
  form = {
    name: '',
    email: '',
    message: ''
  };

  constructor(private formService: FormServiceService) {}

  onSubmit(): void {
    this.formService.setFormData(this.form);
    alert('Formulaire envoyé avec succès !');
  }
}
