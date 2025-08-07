import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CartService } from '../../services/cart.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-place-order',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './place-order.html',
})
export class PlaceOrder {
  cartItems: any[] = [];
  total: number = 0;
  orderForm: FormGroup;

  constructor(
    private cartService: CartService,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.cartItems = this.cartService.getCart();
    this.total = this.cartService.getTotal();
    this.orderForm = this.fb.group({
      name: ['', Validators.required],
      address: ['', Validators.required],
    });
  }

  placeOrder() {
    if (this.orderForm.invalid) {
      alert('Please fill all fields!');
      return;
    }

    const order = {
      customer: this.orderForm.value,
      items: this.cartItems,
      total: this.total,
      date: new Date()
    };

    // Save to localStorage for now
    const existingOrders = JSON.parse(localStorage.getItem('foodie_orders') || '[]');
    existingOrders.push(order);
    localStorage.setItem('foodie_orders', JSON.stringify(existingOrders));

    this.cartService.clearCart();
    alert('Order placed successfully!');
    this.router.navigate(['/customer/view-orders']);
  }
}
