import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dish-list',
  imports: [CommonModule],
  templateUrl: './dish-list.html'
})
export class DishList implements OnInit {
  dishes: any[] = [];
  restaurantId: string = '';

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    this.restaurantId = this.route.snapshot.paramMap.get('id') || '';
    this.http.get<any[]>(`http://localhost:3000/dishes?restaurantId=${this.restaurantId}`).subscribe(data => {
      this.dishes = data;
    });
  }

  addToCart(dish: any) {
    // implement cart add logic or navigate
    console.log('Added to cart:', dish);
  }
}
