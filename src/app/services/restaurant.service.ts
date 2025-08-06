import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {
  private apiUrl = 'http://localhost:8080/api/restaurants';

  constructor(private http: HttpClient) {}

  addRestaurant(data: any) {
  return this.http.post('http://localhost:8080/restaurants', data);
}

getAllRestaurants(): Observable<any[]> {
  return this.http.get<any[]>(`${this.apiUrl}/restaurants`);
}

deleteRestaurant(id: number) {
  return this.http.delete(`${this.apiUrl}/restaurants/${id}`);
}
getRestaurantById(id: number) {
  return this.http.get(`${this.apiUrl}/restaurants/${id}`);
}

updateRestaurant(id: number, data: any) {
  return this.http.put(`${this.apiUrl}/restaurants/${id}`, data);
}


}
