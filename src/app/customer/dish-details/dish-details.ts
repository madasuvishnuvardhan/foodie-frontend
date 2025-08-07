import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DishService } from '../../services/dish.service';
import { CartService } from '../../services/cart.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dish-details',
  imports: [CommonModule],
  templateUrl: './dish-details.html',
  styleUrls: ['./dish-details.scss']
})
export class DishDetails implements OnInit {
  dishId!: string;
  dish: any;

  constructor(
    private route: ActivatedRoute,
    private dishService: DishService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.dishId = this.route.snapshot.paramMap.get('id')!;
    this.dishService.getDishById(this.dishId).subscribe((data) => {
      this.dish = data;
    });
  }

  addToCart(): void {
    this.cartService.addToCart(this.dish);
    alert('Dish added to cart!');
  }
}
