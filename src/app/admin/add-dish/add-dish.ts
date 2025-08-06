import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RestaurantService } from '../../services/restaurant.service';
import { DishService } from '../../services/dish.service';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-add-dish',
  imports: [
    CommonModule,           // For *ngFor, *ngIf, etc.
    ReactiveFormsModule     // For formGroup, formControlName
  ],
  templateUrl: './add-dish.html',
  styleUrls: ['./add-dish.scss']
})
export class AddDish implements OnInit {
  addDishForm!: FormGroup;
  restaurants: any[] = [];
constructor(
  private fb: FormBuilder,
  private restaurantService: RestaurantService,
  private dishService: DishService
) {}


  ngOnInit(): void {
    this.addDishForm = this.fb.group({
      dishName: ['', Validators.required],
      price: ['', Validators.required],
      restaurantId: ['', Validators.required]
    });

    this.restaurantService.getAllRestaurants().subscribe({
      next: (data: any) => {
        this.restaurants = data;
      },
      error: (err: any) => {
        console.error('Error fetching restaurants:', err);
      }
    });
  }

onSubmit() {
  if (this.addDishForm.valid) {
    this.dishService.addDish(this.addDishForm.value).subscribe({
      next: () => {
        alert('Dish added successfully');
        this.addDishForm.reset();
      },
      error: (err) => {
        console.error(err);
        alert('Failed to add dish');
      }
    });
  }
}


}
