import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-orders',
  imports: [CommonModule],
  templateUrl: './view-orders.html',
  styleUrls: ['./view-orders.scss']
})
export class ViewOrders implements OnInit {
  orders: any[] = [];

  ngOnInit(): void {
    // Simulated orders
    this.orders = [
      { id: 1, items: ['Pizza', 'Burger'], total: 400, date: '2025-08-06' },
      { id: 2, items: ['Biryani'], total: 200, date: '2025-08-05' }
    ];
  }
}
