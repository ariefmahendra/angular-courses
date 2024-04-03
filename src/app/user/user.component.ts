import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  username: string = "ariefmahendra";
  logoUrl: string = "/assets/angular-icon.svg";
  logoAlt: string = "Logo"
}
