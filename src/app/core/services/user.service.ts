import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { UserI } from "@core/interfaces/user.interface";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = 'https://desarrollo.maxgp.com.co/webservice/api/V1/practicas_dev/usuarios';

  constructor(private http: HttpClient) { }

  public addUser(user: UserI) {
    var httpOptions = {
      headers: new HttpHeaders({
        "Authorization": "Hmac MTIzNDU2Nzg5MDowOTg3NjU0MzIx",
        "Empresa": "pilotos",
        "Content-Type": "application/json",
        "Accept": "application/json"
      }),
    };
    return this.http
      .post<UserI>(this.baseUrl, user, httpOptions)
  }
}
