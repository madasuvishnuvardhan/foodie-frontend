import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DishService } from '../../services/dish.service';
import { RestaurantService } from '../../services/restaurant.service';

@Component({
  selector: 'app-add-dish',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-dish.html',
  styleUrls: ['./add-dish.scss']
})
export class AddDish implements OnInit {
  dishForm!: FormGroup;
  restaurants: any[] = [];

  constructor(
    private fb: FormBuilder,
    private dishService: DishService,
    private restaurantService: RestaurantService
  ) {}

  ngOnInit(): void {
    this.dishForm = this.fb.group({
      name: ['', Validators.required],
      price: [0, Validators.required],
      description: [''],
      restaurantId: ['', Validators.required]
    });

    this.restaurantService.getAllRestaurants().subscribe({
      next: (data) => this.restaurants = data,
      error: (err) => console.error(err)
    });

  }

  onSubmit() {
    if (this.dishForm.valid) {
      this.dishService.addDish(this.dishForm.value).subscribe({
        next: () => alert('Dish added successfully'),
        error: (err) => console.error(err)
      });
    }
  }
}
