import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private key = 'foodie_cart';

  getCart(): any[] {
    return JSON.parse(localStorage.getItem(this.key) || '[]');
  }

  addToCart(item: any) {
    const cart = this.getCart();
    cart.push(item);
    localStorage.setItem(this.key, JSON.stringify(cart));
  }

  removeFromCart(index: number) {
    const cart = this.getCart();
    cart.splice(index, 1);
    localStorage.setItem(this.key, JSON.stringify(cart));
  }

  clearCart() {
    localStorage.removeItem(this.key);
  }

  getTotal(): number {
    const cart = this.getCart();
    return cart.reduce((sum, item) => sum + (item.price * (item.quantity || 1)), 0);
  }
}
