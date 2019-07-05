import { Injectable } from '@angular/core';
import { Food } from 'src/app/core/models/food.model';

@Injectable({
  providedIn: 'root'
})
export class FoodService {
  food: Food[] = []

  constructor() { }
}
