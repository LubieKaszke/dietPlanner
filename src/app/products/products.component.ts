import { Component, OnInit } from '@angular/core';
import {Product} from '../product'
import { HttpClient } from 'selenium-webdriver/http';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor() { }
  Products: object [];

  ngOnInit() {
 
  }

}
