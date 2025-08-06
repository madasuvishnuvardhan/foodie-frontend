import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {
  private apiUrl = 'http://localhost:8080/api/restaurants';

  constructor(private http: HttpClient) {}

  addRestaurant(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }
  getAllRestaurants(): Observable<any> {
  return this.http.get('http://localhost:8080/api/restaurants');
}

}
