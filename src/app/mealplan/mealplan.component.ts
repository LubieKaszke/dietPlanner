import { Component, OnInit } from '@angular/core';
import {Product} from '../product';
import {ProductsService} from '../products.service'
import {User} from '../calculator/user';
import {UserService} from '../calculator/user-service'
import { MealService} from '../meal.service';
import {Observable, of} from 'rxjs';


@Component({
  selector: 'app-mealplan',
  templateUrl: './mealplan.component.html',
  styleUrls: ['./mealplan.component.css']
})
export class MealplanComponent implements OnInit {
  public mealplanProducts$: Observable<Product[]> = of([]);
  public mealplanProducts: Product[] =[];
  
  constructor( private mealService: MealService) {
    this.mealplanProducts$ = this.mealService.getProducts();
    this.mealplanProducts$.subscribe(_ => this.mealplanProducts = _);
   }

  ngOnInit() {
    
  }

  public removeProduct(product: Product){
    this.mealService.removeFromCart(product)
  }

}
