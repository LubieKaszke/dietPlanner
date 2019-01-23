import {ChangeDetectionStrategy, Component, OnInit, Input } from '@angular/core';
import {Product, ProductFilter} from '../product'
import {ProductsService} from '../products.service';
import { isNgTemplate } from '@angular/compiler';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsComponent implements OnInit {
  public products: Product[];
  selectedProduct: Product;
  isLoadingResults = true;

  public readonly filters: ProductFilter[] =[
    <ProductFilter>{type: 'dairy'},
    <ProductFilter>{type: 'meat'},
    <ProductFilter>{type: 'vegetables'}
  ]
  public activeFilters: ProductFilter[] = [];

  constructor(private productsService: ProductsService) { }

  getProducts(): void{
    this.productsService.getProducts().subscribe(res => 
      {this.products = res;
      console.log(this.products);
    this.isLoadingResults =false;},
    err => {
      console.log(err);
      this.isLoadingResults = false;
    });
  }

  ngOnInit() {
    this.getProducts();
  }

  onSelect(product: Product): void {
    this.selectedProduct = product;
  }

  public productsAfterFilter(): Product[]{
    return this.products.filter((product:Product) =>{
      const matchesActiveFilter: boolean = this.activeFilters.reduce((prev,curr)=>{
        if(product.type.includes(curr.type)){
          return prev && true;
        }else{
          return false;
        }
      }, true);
      return matchesActiveFilter;
    });
  }

  public updateActivatedFilters(filters: ProductFilter[]){
    this.activeFilters = filters;
  }
}
