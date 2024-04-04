import { PipeComponent } from './pipe/pipe.component';
import { ValidatingFormsComponent } from './validating-forms/validating-forms.component';
import { FormControlValueComponent } from './form-control-value/form-control-value.component';
import { Component, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ChildComponentComponent } from './child-component/child-component.component';
import { DeferableViewsComponent } from './deferable-views/deferable-views.component';
import { UserComponent } from './user/user.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { CarService } from './car.service';
import { LowerCasePipe } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    ChildComponentComponent,
    DeferableViewsComponent,
    UserComponent,
    FormControlValueComponent,
    ReactiveFormsComponent,
    ValidatingFormsComponent,
    LowerCasePipe,
    PipeComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  display: string = "";

  // constructor() {
  //   this.display = this.carService.getCars().join(' ⭐️ ');
  // }

  constructor( private CarService: CarService ){
    this.display = CarService.getCars().join(' ⭐️ ');
  }

  title = 'angular-courses';
  currentItem: string = 'book with @Input()';

  items: string[] = [
    'item1',
    'item2',
    'item3',
    'item4'
  ]

  addItem(newItem: string){
    this.items.push(newItem);
  }

  // carService = inject(CarService);

  // pipe
  username: string = "Arief MAhendra";
}
