import { Routes } from '@angular/router';
import { AuthGuard } from './guards/auth-guard';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./user/restaurant-list/restaurant-list').then(m => m.RestaurantList) },
  { path: 'login', loadComponent: () => import('./admin/login/login').then(m => m.Login) },

  // Admin routes (protected)
  { path: 'admin/add-restaurant', loadComponent: () => import('./admin/add-restaurant/add-restaurant').then(m => m.AddRestaurantComponent), canActivate: [AuthGuard] },
  { path: 'admin/add-dish', loadComponent: () => import('./admin/add-dish/add-dish').then(m => m.AddDish), canActivate: [AuthGuard] },
  { path: 'admin/edit-restaurant/:id', loadComponent: () => import('./admin/edit-restaurant/edit-restaurant').then(m => m.EditRestaurantComponent), canActivate: [AuthGuard] },
  { path: 'admin/edit-dish/:id', loadComponent: () => import('./admin/edit-dish/edit-dish').then(m => m.EditDish), canActivate: [AuthGuard] },

  // Customer routes
  {
    path: 'customer',
    children: [
      { path: 'home', loadComponent: () => import('./customer/customer-home/customer-home').then(m => m.CustomerHome) },
      { path: 'dishes', loadComponent: () => import('./customer/view-dishes/view-dishes').then(m => m.ViewDishes) },
      { path: 'restaurants', loadComponent: () => import('./customer/view-restaurants/view-restaurants').then(m => m.ViewRestaurants) },
      { path: 'dishes/:id', loadComponent: () => import('./customer/dish-details/dish-details').then(m => m.DishDetails) },
      { path: 'cart', loadComponent: () => import('./customer/cart/cart').then(m => m.Cart) },
      { path: 'place-order', loadComponent: () => import('./customer/place-order/place-order').then(m => m.PlaceOrder) },
      { path: 'view-orders', loadComponent: () => import('./customer/view-orders/view-orders').then(m => m.ViewOrders) }
    ]
  },

  // Shared
  { path: 'restaurant/:id/dishes', loadComponent: () => import('./user/dish-list/dish-list').then(m => m.DishList) },

  // fallback
  { path: '**', redirectTo: '' }
];
