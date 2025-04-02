import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private http = inject(HttpClient)
  private url = 'https://dummyjson.com/auth/login'

  login(username: string, password: string) {
    return this.http.post(this.url, {
      username: username,
      password: password,
    })
  }
}
