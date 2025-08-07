import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DishService {
  private baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  addDish(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/dishes`, data);
  }

  getAllDishes(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/dishes`);
  }

  deleteDish(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/dishes/${id}`);
  }

  updateDish(id: number, data: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/dishes/${id}`, data);
  }

  getDishById(id: string): Observable<any> {
  return this.http.get<any>(`http://localhost:3000/dishes/${id}`);
}

  
}
