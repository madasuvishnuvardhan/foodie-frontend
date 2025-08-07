import { Component } from '@angular/core';
import { DishService } from '../../services/dish.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-view-dishes',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './view-dishes.html',
  styleUrl: './view-dishes.scss'
})
export class ViewDishes {
  dishes: any[] = [];

  constructor(private dishService: DishService) {}
ngOnInit() {
  this.dishService.getAllDishes().subscribe({
    next: (res) => this.dishes = res,
    error: (err) => console.error(err)
  });
}

}
