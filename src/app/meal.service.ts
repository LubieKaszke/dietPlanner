import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, Subject, Subscriber} from 'rxjs';

import {Product } from './product'
@Injectable({
  providedIn: 'root'
})
export class MealService {
  private productsInMealSubject: BehaviorSubject<Product[]> = new BehaviorSubject([]);
  private productsInMeal : Product[]=[];

  constructor() {
    this.productsInMealSubject.subscribe(_ => this.productsInMeal =_);
   }

   public addToMeal(product: Product){
     this.productsInMealSubject.next([...this.productsInMeal, product]);
   }

   public getProducts(): Observable<Product[]>{
     return this.productsInMealSubject.asObservable();
   }

   public removeFromCart(product:Product){
     const currentProducts = [...this.productsInMeal];
     const productsWithoutRemoved = currentProducts.filter(_=> _.id !== product.id)
     this.productsInMealSubject.next(productsWithoutRemoved);
   }

}
