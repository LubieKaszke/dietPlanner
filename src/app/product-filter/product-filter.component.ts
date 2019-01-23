import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {ProductType, ProductFilter} from '../product'
@Component({
  selector: 'app-product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.css']
})
export class ProductFilterComponent implements OnInit {

  @Input() availableFilters: ProductFilter[] = [];
  @Input() activatedFilters: ProductFilter[] = [];
  @Output() activeFilters: EventEmitter<ProductFilter[]> = new EventEmitter<ProductFilter[]>();

  constructor() { }

  ngOnInit() {
  }

  public filterType(type: ProductType): string{
    const types ={
      'dairy':'dairy',
      'meat':'meat',
      'vegetables': "vegetables"
    };
    return types[type];
  }

  public filterActive(filter: ProductFilter):boolean {
    return this.activatedFilters.find(_ => _.type === filter.type) != null;
  }

  public changeFilterStatus(filter: ProductFilter){
    this.activeFilters.emit([filter]);
  }

}
