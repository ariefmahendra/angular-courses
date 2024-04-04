import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarService { 
  cars: string[] = ["Avanza", "Pickup", "Brio"];

  getCars(): string[]{
    return this.cars;
  }

  getCar(id: number): string{
    return this.cars[id];
  }
}
