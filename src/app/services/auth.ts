// src/app/services/auth.service.ts

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class Auth {

  private readonly TOKEN_KEY = 'admin-token';

  constructor(private router: Router) {}

  login(username: string, password: string): boolean {
    // Hardcoded credentials for demo
    if (username === 'admin' && password === 'admin123') {
      localStorage.setItem(this.TOKEN_KEY, 'valid-token');
      return true;
    }
    return false;
  }

  logout(): void {
    localStorage.removeItem(this.TOKEN_KEY);
    this.router.navigate(['/login']);
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem(this.TOKEN_KEY);
  }
}
