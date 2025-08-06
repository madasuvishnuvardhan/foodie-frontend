import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DishService } from '../services/dish.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-view-dishes',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './viewdishes.html',
  styleUrls: ['./viewdishes.scss']
})
export class ViewDishesComponent implements OnInit {
  dishes: any[] = [];

  constructor(private dishService: DishService) {}

  ngOnInit(): void {
    this.loadDishes();
  }

  loadDishes() {
    this.dishService.getAllDishes().subscribe({
      next: (data: any) => this.dishes = data,
      error: (err) => console.error(err)
    });
  }
}
