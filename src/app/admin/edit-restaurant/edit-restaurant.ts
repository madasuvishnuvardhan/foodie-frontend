import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RestaurantService } from '../../services/restaurant.service';

@Component({
  selector: 'app-edit-restaurant',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './edit-restaurant.html',
  styleUrls: ['./edit-restaurant.scss']
})
export class EditRestaurantComponent implements OnInit {
  restaurantForm!: FormGroup;
  restaurantId!: number;

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router,
    private restaurantService: RestaurantService
  ) {}

  ngOnInit(): void {
    this.restaurantId = Number(this.route.snapshot.paramMap.get('id'));

    this.restaurantForm = this.fb.group({
      name: ['', Validators.required],
      location: ['', Validators.required],
      cuisine: ['', Validators.required]
    });

    this.restaurantService.getRestaurantById(this.restaurantId).subscribe({
      next: (data: any) => this.restaurantForm.patchValue(data),
      error: (err) => console.error(err)
    });
  }

  onSubmit() {
    if (this.restaurantForm.valid) {
      this.restaurantService.updateRestaurant(this.restaurantId, this.restaurantForm.value).subscribe({
        next: () => {
          alert('Restaurant updated successfully');
          this.router.navigate(['/admin/view-restaurants']);
        },
        error: (err) => console.error(err)
      });
    }
  }
}
