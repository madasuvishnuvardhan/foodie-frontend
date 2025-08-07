import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: any[] = [];

  addToCart(item: any): void {
    this.cartItems.push(item);
  }

  getCartItems(): any[] {
    return this.cartItems;
  }

  removeFromCart(id: string): void {
    this.cartItems = this.cartItems.filter(item => item.id !== id);
  }

  clearCart(): void {
    this.cartItems = [];
  }
}
