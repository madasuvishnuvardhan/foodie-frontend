import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-orders',
  templateUrl: './view-orders.html',
})
export class ViewOrders implements OnInit {
  orders: any[] = [];

  ngOnInit(): void {
    const storedOrders = localStorage.getItem('foodie_orders');
    this.orders = storedOrders ? JSON.parse(storedOrders) : [];
  }
}
