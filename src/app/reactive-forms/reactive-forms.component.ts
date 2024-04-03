import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-forms.component.html',
  styleUrl: './reactive-forms.component.css'
})
export class ReactiveFormsComponent {
  profileForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
  })

  handleSubmit(){
    alert(
      this.profileForm.value.email + ' | ' + this.profileForm.value.email
    )
  }
}
