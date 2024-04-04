import { CurrencyPipe, DatePipe, DecimalPipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe',
  standalone: true,
  imports: [
      DecimalPipe,
      DatePipe,
      CurrencyPipe
  ],
  templateUrl: './pipe.component.html',
  styleUrl: './pipe.component.css'
})
export class PipeComponent {
  num: number = 103.1234;
  birthday: Date = new Date( 2023, 3, 2);
  cost: number = 4560.34;
}
