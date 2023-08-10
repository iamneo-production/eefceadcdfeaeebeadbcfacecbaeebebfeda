import { Component } from '@angular/core';

interface Food {
  name: string;
  calories: number;
  image: string;
  quantity?: number; // Optional property for quantity
}

@Component({
  selector: 'app-food-list',
  templateUrl: './app-food-list.component.html',
  styleUrls: ['./app-food-list.component.css']
})
export class AppFoodListComponent {
  foods: Food[] = []; // Initialize with your food data
  newFood: Food = { name: '', calories: 0, image: '' };
  todaysFoods: Food[] = [];
  searchText: string = '';
  showAddForm = false;

  addFood() {
    this.foods.push(this.newFood);
    this.newFood = { name: '', calories: 0, image: '' };
    this.showAddForm = false;
  }

  addToTodaysFoods(food: Food, quantity: number = 1) {
    for (let i = 0; i < quantity; i++) {
      this.todaysFoods.push(food);
    }
  }
}
