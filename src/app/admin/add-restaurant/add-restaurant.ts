import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { RestaurantService } from '../../services/restaurant.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-restaurant',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-restaurant.html',
  styleUrls: ['./add-restaurant.scss']
})
export class AddRestaurantComponent {
  restaurantForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private restaurantService: RestaurantService
  ) {
    this.restaurantForm = this.fb.group({
      name: ['', Validators.required],
      location: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.restaurantForm.valid) {
      this.restaurantService.addRestaurant(this.restaurantForm.value).subscribe({
        next: () => {
          alert('Restaurant added successfully!');
          this.restaurantForm.reset();
        },
        error: (err) => {
          console.error(err);
          alert('Failed to add restaurant.');
        }
      });
    }
  }
}
