import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestaurantService } from '../services/restaurant.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-view-restaurants',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './view-restaurants.html',
  styleUrls: ['./view-restaurants.scss']
})
export class ViewRestaurantsComponent implements OnInit {
  restaurants: any[] = [];

  constructor(private restaurantService: RestaurantService, private router: Router) {}

  ngOnInit(): void {
    this.loadRestaurants();
  }

  loadRestaurants() {
    this.restaurantService.getAllRestaurants().subscribe({
      next: (data: any) => this.restaurants = data,
      error: (err) => console.error(err)
    });
  }

  editRestaurant(id: number) {
    this.router.navigate(['/admin/edit-restaurant', id]);
  }

  deleteRestaurant(id: number) {
    if (confirm('Are you sure you want to delete this restaurant?')) {
      this.restaurantService.deleteRestaurant(id).subscribe({
        next: () => {
          alert('Restaurant deleted successfully');
          this.loadRestaurants();
        },
        error: (err) => console.error(err)
      });
    }
  }
}
