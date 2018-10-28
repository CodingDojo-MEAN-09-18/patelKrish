import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private readonly product_url = 'http://5bcfb971142d360013a171f9.mockapi.io/api/products'

  constructor(private readonly http: HttpClient) { }

  // CRUD OPERATIONS

  // ...get all products      - GET     /
  getAllProducts(): Observable<Product[]>{ return this.http.get<Product[]>(this.product_url); }

  // ...get product by id     - GET     /:id
  getProductById(id: number): Observable<Product>{ return this.http.get<Product>(`${this.product_url}/${id}`); }

  // ...create new product    - POST    /
  createProduct(product: Product): Observable<Product>{ return this.http.post<Product>(this.product_url, product); }

  // ...update product        - PUT     /:id
  updateProduct(id: number, product: Product): Observable<Product> { return this.http.put<Product>(`${this.product_url}/${id}`, product); }

  // ...delete product        - DELETE  /:id
  deleteProduct(id: number): Observable<Product> { return this.http.delete<Product>(`${this.product_url}/${id}`); }

}
