import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {
  private http = inject(HttpClient)
  private url = 'https://dummyjson.com/products'

  Produtos(): Observable<any> {
    return this.http.get(this.url)
  }

  Produto(id: number): Observable<any> {
    return this.http.get(`${this.url}/${id}`)
  }
}
