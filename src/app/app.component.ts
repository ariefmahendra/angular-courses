import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChildComponentComponent } from './child-component/child-component.component';
import { DeferableViewsComponent } from './deferable-views/deferable-views.component';
import { UserComponent } from './user/user.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ChildComponentComponent,
    DeferableViewsComponent,
    UserComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
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
}
