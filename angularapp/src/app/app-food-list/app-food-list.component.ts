import { Component } from '@angular/core';

@Component({
  selector: 'app-food-list',
  templateUrl: './app-food-list.component.html',
  styleUrls: ['./app-food-list.component.css']
})
export class AppFoodListComponent {
  foods = [
    { name: 'Banana', calories: 100, imageSrc: 'path/to/banana.jpg' },
    { name: 'Salmon', calories: 250, imageSrc: 'path/to/salmon.jpg' },
    { name: 'Cake', calories: 400, imageSrc: 'path/to/cake.jpg' }
  ];

  searchText = '';
  filteredFoods = [...this.foods];
  todaysFoods: any[] = [];
  totalCalories = 0;

  addToTodaysFoods(food: any) {
    const existingFood = this.todaysFoods.find(item => item.name === food.name);
    if (existingFood) {
      existingFood.quantity++;
    } else {
      this.todaysFoods.push({ ...food, quantity: 1 });
    }
    this.calculateTotalCalories();
  }

  calculateTotalCalories() {
    this.totalCalories = this.todaysFoods.reduce((total, food) => total + food.calories * food.quantity, 0);
  }
}
