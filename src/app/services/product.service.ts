import { Injectable } from '@angular/core';
import { Observable, delay } from 'rxjs';
import { IProductDetails } from '../models/product.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  public getProducts(): Observable<IProductDetails[]> {
    return this.http.get<IProductDetails[]>('http://localhost:3000/products').pipe(
      delay(2000)
    )
  }
}
