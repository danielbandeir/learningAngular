import { Injectable } from '@angular/core';
import { Food } from 'src/app/core/models/food.model';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  food: Food[] = [];

  constructor() { }

  checkIfHaveFood() {
    if (this.food.length === 0) {
      return true;
    } else {
      return false;
    }
  }

  addFood(food: Food) {
    return this.food.push(food);
  }

  deleteFood(food: Food) {
    for (let i = 0; i < this.food.length; i++) {
      if (food.id === this.food[i].id) {
        // need remove food
        this.food.splice(i, 1);
      }
    }
  }

  editFood(food: Food ) {
    for (let i = 0; i < this.food.length; i++) {
      if (food.id === this.food[i].id) {
        this.food[i] = food;
      }
    }
  }
}
