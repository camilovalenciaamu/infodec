import { Injectable } from '@angular/core';
import {
  HttpHeaders,
  HttpClient,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RestaurantService {
  private baseUrl =
    'https://desarrollo.maxgp.com.co/webservice/api/V1/practicas_dev/restaurantes';

  constructor(private http: HttpClient) { }

  public getRestaurants(): Observable<any> {
    var httpOptions = {
      headers: new HttpHeaders({
        "Authorization": "Hmac MTIzNDU2Nzg5MDowOTg3NjU0MzIx",
        "Empresa": "pilotos",
        "Content-Type": "application/x-www-form-urlencoded",
        "Accept": "application/json"
      }),
    };

    return this.http
      .get<any>(this.baseUrl, httpOptions);
  }

}
