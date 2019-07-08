import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Food } from 'src/app/core/models/food.model';
import { FoodService } from 'src/app/core/service/food.service';

@Component({
  selector: 'app-food-add',
  templateUrl: './food-add.component.html',
  styleUrls: ['./food-add.component.scss']
})
export class FoodAddComponent implements OnInit {

  food: Food;

  constructor(private fb: FormBuilder, private foodService: FoodService) { }

  foodAddForm = this.fb.group({
    foodName : [''],
    foodImage: [''],
    foodPrice: ['']
  });

  ngOnInit() {
  }

  saveFood() {
    this.food = new Food(this.foodService.food.length,
      this.foodAddForm.get('foodName').value,
      this.foodAddForm.get('foodImage').value,
      this.foodAddForm.get('foodPrice').value);
    this.foodService.addFood(this.food);
  }

}
