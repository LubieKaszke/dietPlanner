import { Component, OnInit, Input } from '@angular/core';
import {Product} from '../product';
import { MealService } from '../meal.service';
import { ProductsService } from '../products.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})


export class ProductDetailComponent implements OnInit {
  @Input() product:Product;
  constructor(private mealService: MealService, private productsService:ProductsService,private route: ActivatedRoute,private location: Location, private router:Router) { 

  }

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct(): void{
    const id =+this.route.snapshot.paramMap.get('id');
    this.productsService.getProduct(id).subscribe(product =>{
       this.product = product;
       console.log(product);
      });
    
  }

  public addToMeal(product: Product){
    this.mealService.addToMeal(product);
  }

  goBack():void{
    this.location.back();
  }

  public deleteProduct(id) {
    this.productsService.deleteProduct(id)
      .subscribe(res => {  
        }, (err) => {
          console.log(err);
        }
      );
  }

  public edit() {
    this.router.navigate(['/edit',this.product.id])
  }

}
