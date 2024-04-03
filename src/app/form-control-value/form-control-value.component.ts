import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-control-value',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form-control-value.component.html',
  styleUrl: './form-control-value.component.css'
})
export class FormControlValueComponent {
  username: string = "arief mahendra";
  favoriteFramework: string = '';

  showFramework() {
    alert(this.favoriteFramework)
  }

}
