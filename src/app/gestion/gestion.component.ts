import { Component, OnInit } from '@angular/core';
import { FormServiceService } from './form-service.service';

@Component({
  selector: 'app-gestion',
  templateUrl: './gestion.component.html',
  styleUrls: ['./gestion.component.css']
})
export class GestionComponent implements OnInit {
  formData: any = null;

  constructor(private formService: FormServiceService) {}

  ngOnInit(): void {
    this.formData = this.formService.getFormData(); // Récupérer les données du formulaire
  }
}
