import { Injectable } from '@angular/core';
import { Product} from './product';
import {Observable,of} from'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private url='http://localhost:8081/products';
  
  constructor(private http: HttpClient) { }
  getProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(this.url);
  }
}
