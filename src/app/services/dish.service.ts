import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DishService {  
  private baseUrl = 'http://localhost:8080/api/dishes';

  constructor(private http: HttpClient) {}

  addDish(dishData: any): Observable<any> {
    return this.http.post(this.baseUrl, dishData);
  }
}
