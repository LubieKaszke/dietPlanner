import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { HomepageComponent } from './homepage/homepage.component';
import {HttpClientModule} from '@angular/common/http';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { MealplanComponent } from './mealplan/mealplan.component';
import { CalculatorComponent } from './calculator/calculator.component'
import { UserService } from './calculator/user-service';
import { UserDetailsComponent } from './user-details/user-details.component';
import { ProductFilterComponent } from './product-filter/product-filter.component';
import { ProductAddComponent } from './product-add/product-add.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    HomepageComponent,
    ProductDetailComponent,
    MealplanComponent,
    CalculatorComponent,
    UserDetailsComponent,
    ProductFilterComponent,
    ProductAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
