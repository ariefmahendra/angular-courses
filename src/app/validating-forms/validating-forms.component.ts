import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-validating-forms',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './validating-forms.component.html',
  styleUrl: './validating-forms.component.css'
})
export class ValidatingFormsComponent {
  profileForms = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required)
  })
}
