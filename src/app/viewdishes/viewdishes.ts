import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { OnInit } from '@angular/core';
import { DishService } from '../services/dish.service'; // Adjust the import path as necessary

@Component({
  selector: 'app-viewdishes',
  standalone: true,
  imports: [CommonModule, RouterModule], // ✅ Add RouterModule here
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
