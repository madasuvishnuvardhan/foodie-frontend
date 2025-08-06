import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RestaurantService } from '../../services/restaurant.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-add-restaurant',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './add-restaurant.html',
  styleUrls: ['./add-restaurant.scss']
})
export class AddRestaurantComponent {
  restaurantForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private restaurantService: RestaurantService
  ) {
    this.restaurantForm = this.fb.group({
      name: ['', Validators.required],
      location: ['', Validators.required],
      cuisine: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.restaurantForm.valid) {
      this.restaurantService.addRestaurant(this.restaurantForm.value).subscribe({
        next: () => alert('Restaurant added successfully'),
        error: (err) => console.error(err)
      });
    }
  }
}
