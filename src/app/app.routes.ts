import { Routes } from '@angular/router';
import { AddRestaurantComponent } from './admin/add-restaurant/add-restaurant';
import { AddDish } from './admin/add-dish/add-dish';
import { Login } from './admin/login/login';
import { RestaurantList } from './user/restaurant-list/restaurant-list';
import { DishList } from './user/dish-list/dish-list';
import { Cart } from './user/cart/cart';

import { authGuard } from './guards/auth-guard';

export const routes: Routes = [
  { path: '', component: RestaurantList },
  { path: 'login', component: Login },
  { path: 'admin/add-restaurant', component: AddRestaurantComponent, canActivate: [authGuard] },
  { path: 'admin/add-dish', component: AddDish, canActivate: [authGuard] },
  { path: 'restaurant/:id/dishes', component: DishList },
  { path: 'cart', component: Cart },
  {path: 'admin/edit-restaurant/:id',loadComponent: () =>import('./admin/edit-restaurant/edit-restaurant').then(m => m.EditRestaurantComponent)},
  {
  path: 'admin/add-dish',loadComponent: () =>import('./admin/add-dish/add-dish').then(m => m.AddDish)}
];
