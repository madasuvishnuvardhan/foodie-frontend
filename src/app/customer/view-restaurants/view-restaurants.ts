import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-view-restaurants',
  imports: [CommonModule],
  templateUrl: './view-restaurants.html'
})
export class ViewRestaurants implements OnInit {
  restaurants: any[] = [];

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.http.get<any[]>('http://localhost:3000/restaurants').subscribe(data => {
      this.restaurants = data;
    });
  }

  viewDishes(restaurantId: number) {
    this.router.navigate(['/restaurant', restaurantId, 'dishes']);
  }
}
