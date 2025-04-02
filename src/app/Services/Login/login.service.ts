import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private http = inject(HttpClient)
  private url = 'https://dummyjson.com/auth/login'
  private usersUrl = "https://dummyjson.com/users"

  login(username: string, password: string) {
    return this.http.post(this.url, {
      username: username,
      password: password,
    })

  }

  loginUsuario(id: number): Observable<any> {
    return this.http.get(`${this.usersUrl}/${id}`)
  }
}
