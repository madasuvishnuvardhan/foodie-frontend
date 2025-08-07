import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-home',
  templateUrl: './customer-home.html'
})
export class CustomerHome {
  constructor(private router: Router) {}

  goToRestaurants() {
    this.router.navigate(['/customer/restaurants']);
  }

  goToCart() {
    this.router.navigate(['/customer/cart']);
  }

  goToOrders() {
    this.router.navigate(['/customer/view-orders']);
  }
  goToDishs() {
    this.router.navigate(['/customer/dishes']);
  }
  gotoplaceorder() {
    this.router.navigate(['/customer/place-order']);    
}
}