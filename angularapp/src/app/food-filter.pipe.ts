import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'foodFilter'
})
export class FoodFilterPipe implements PipeTransform {
  transform(foods: any[], searchText: string): any[] {
    if (!foods || !searchText) {
      return foods;
    }

    searchText = searchText.toLowerCase();
    return foods.filter(food => food.name.toLowerCase().includes(searchText));
  }
}
