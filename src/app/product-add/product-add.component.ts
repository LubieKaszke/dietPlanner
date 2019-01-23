import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products.service';
import { ProductType} from '../product'
import {Product} from '../product'
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  constructor(private api: ProductsService, private formBuilder: FormBuilder, private route:ActivatedRoute) { }
  id: number;
 products: Product[];
 product =new Product();
productForm: FormGroup;
name: string='';
quantity: number=null;
type: ProductType =null;
nutritions: {
   energy: number;
   protein: number;
   carbs : number;
   fat: number;
}

  ngOnInit() {

    this.productForm= this.formBuilder.group({
      name: [null, Validators.required],
      type: [null, Validators.required],
      energy: [null, Validators.required],
      protein: [null, Validators.required],
      carbs:[null, Validators.required],
      fat: [null, Validators.required]
    });
   
    this.route.paramMap.subscribe(parameterMap =>{
      this.id = +parameterMap.get('id');
      this.getProduct(this.id);
    })
  }

  private getProduct(id: number){
    if(id ===0){
       this.productForm= this.formBuilder.group({
      name: [null, Validators.required],
      type: [null, Validators.required],
      energy: [null, Validators.required],
      protein: [null, Validators.required],
      carbs:[null, Validators.required],
      fat: [null, Validators.required]
    });
    }else{
    this.api.getProduct(id).subscribe( product =>{
      this.productForm= this.formBuilder.group({
        name: [product.name, Validators.required],
        type: [product.type, Validators.required],
        energy: [product.nutritions.energy, Validators.required],
        protein: [product.nutritions.protein, Validators.required],
        carbs:[product.nutritions.carbs, Validators.required],
        fat: [product.nutritions.fat, Validators.required]
      });
      
    });
  }
  }

  onFormSubmit(){
    if(this.id === 0) {
      this.api.addProduct(this.productForm.value).subscribe( product =>{
        console.log(product);
       }); 
    } else {
      this.api.updateProduct(this.productForm.value, this.id).subscribe( product =>{
        console.log(product);
       }); 
    }
  }

}
