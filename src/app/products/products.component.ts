import { Component, OnInit } from '@angular/core';
import {Product} from '../product'
import {ProductsService} from '../products.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[];
  selectedProduct: Product;
  product: {
    id:4,
    name:"Rice",
    quantity:100,
    nutritions:{
      energy:1234,
      protein:13,
      carbs:123,
      fat:12
    }
  }
  constructor(private productsService: ProductsService) { }
  getProducts(): void{
    this.productsService.getProducts().subscribe(products => this.products =products)
  }

  ngOnInit() {
    this.getProducts();
  }

  onSelect(product: Product): void {
    this.selectedProduct = product;
  }
}
