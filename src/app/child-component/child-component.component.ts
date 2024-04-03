import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child-component',
  standalone: true,
  imports: [],
  templateUrl: './child-component.component.html',
  styleUrl: './child-component.component.css'
})
export class ChildComponentComponent {
  @Input() item: string = '';

  @Output() newItemEvent = new EventEmitter<string>();
  addNewItem(value: string) {
    this.newItemEvent.emit(value);
  }
}
