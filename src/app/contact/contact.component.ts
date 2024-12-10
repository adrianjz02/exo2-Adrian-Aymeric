import {Component} from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {NgIf} from '@angular/common';
import {Router, RouterLink} from '@angular/router';
import {FormServiceService} from '../service/form-service.service';

@Component({
  selector: 'app-contact',
  imports: [
    ReactiveFormsModule,
    FormsModule,
    NgIf,
    RouterLink
  ],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  public profileForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    age: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    commentary: new FormControl('', Validators.required),
  });

  public isEmailVisible = true;

  constructor(private router: Router, private formDataService: FormServiceService) {
  }

  toggleEmailVisibility() {
    this.isEmailVisible = !this.isEmailVisible;

    if (this.isEmailVisible) {
      this.profileForm.get('email')?.setValidators([
        Validators.required,
        Validators.email,
      ]);
    } else {
      this.profileForm.get('email')?.clearValidators();
    }
    this.profileForm.get('email')?.updateValueAndValidity();
  }

  onSubmit() {
    if (this.profileForm.valid) {
      // Sauvegarde des données dans le service
      this.formDataService.saveFormData(this.profileForm.value);

      // Afficher une alerte
      alert('Le formulaire est valide');

      // Redirection vers la page d'accueil
      this.router.navigate(['/accueil']);
    } else {
      alert('Le formulaire est invalide. Veuillez vérifier les champs.');
    }
  }
}
