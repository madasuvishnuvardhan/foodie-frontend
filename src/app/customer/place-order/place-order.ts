import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-place-order',
  imports: [CommonModule],
  templateUrl: './place-order.html',
  styleUrls: ['./place-order.scss']
})
export class PlaceOrder implements OnInit {
  cartItems: any[] = [];
  total: number = 0;

  constructor(private cartService: CartService, private router: Router) {}

  ngOnInit(): void {
    this.cartItems = this.cartService.getCartItems();
    this.total = this.cartItems.reduce((sum, item) => sum + item.price, 0);
  }

  placeOrder(): void {
    // In real app, you'd send this to backend
    alert('Order placed successfully!');
    this.cartService.clearCart();
    this.router.navigate(['/customer/view-orders']);
  }
}
