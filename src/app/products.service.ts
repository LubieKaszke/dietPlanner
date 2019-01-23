import { Injectable } from '@angular/core';
import { Product} from './product';
import {Observable,of, Observer,throwError} from'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { catchError, tap, map } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private url='http://localhost:8081';

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  
  constructor(private http: HttpClient) { }
  getProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(`${this.url}/products`);
  }

  getProduct(id:number): Observable<Product>{
    const url = `${this.url}/products/${id}`;
    return this.http.get<Product>(url).pipe(
      tap(_ => console.log(`fetched product id=${id}`)),
      catchError(this.handleError<Product>(`getProduct id=${id}`))
    );
  }

  addProduct(product): Observable<Product> {
    return this.http.post<Product>(`${this.url}/addProduct`,product,httpOptions).pipe(
      tap((product:Product)=>console.log(`added product w/ id=${product.id}`)),
      catchError(this.handleError<Product>('add Product'))
    );
  }

  updateProduct(product, id): Observable<any>{
    return this.http.put(`${this.url}/edit/${id}`,product,httpOptions).pipe(
      tap(_ => console.log(`updated product id=${id}`)),
      catchError(this.handleError<any>('updateProduct'))
    );
  }

  deleteProduct(id): Observable<Product>{
    const url =`${this.url}/products/${id}`;
    return this.http.delete<Product>(url,httpOptions).pipe(
      tap(_ => console.log(`deleted product id=${id}`)),
      catchError(this.handleError<Product>('delete product'))
    ) ;   
  }


}

