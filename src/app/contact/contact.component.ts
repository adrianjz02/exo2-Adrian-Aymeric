import {Component} from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-contact',
  imports: [
    ReactiveFormsModule,
    FormsModule,
    NgIf
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  public profileForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    age: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    commentary: new FormControl('', Validators.required),
  })

  public isEmailVisible = true;

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
      alert('Le formulaire est valide');
      console.log(this.profileForm.value);
    }
  }
}
