import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductsComponent} from './products/products.component'
import {MealplanComponent} from './mealplan/mealplan.component';
import {CalculatorComponent} from './calculator/calculator.component'
import { ProductAddComponent } from './product-add/product-add.component';

import { ProductDetailComponent} from './product-detail/product-detail.component'

const routes: Routes = [
  {path:'products',component : ProductsComponent},
  {path:'mealplan',component : MealplanComponent},
  {path:'calculator',component : CalculatorComponent},
  {path: 'productAdd',component: ProductAddComponent},
  { path: ':id', component: ProductDetailComponent },
  
  {
    path: 'edit/:id',
    component: ProductAddComponent,
    data: { title: 'Edit Product' }
  },
  { path: '',
    redirectTo: '/products',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
