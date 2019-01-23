import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { UserService } from './user-service';
import { User } from './user';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  isValidFormSubmitted: boolean =null;
  activity =['Light Excercise', 'Medium Excercise', 'Active', 'Very Active'];
  userForm = new FormGroup({
    uname: new FormControl('',Validators.required),
    height: new FormControl('',Validators.required),
    weight: new FormControl('',Validators.required),
    age: new FormControl('',Validators.required),
    gender: new FormControl('',Validators.required),
    activity: new FormControl('',Validators.required)
  });
   user = new User();
   
  constructor(private userService: UserService) { }

  onFormSubmit(){
    this.isValidFormSubmitted =false;
    if(this.userForm.invalid){
      return;
    }
    this.isValidFormSubmitted=true;
    console.log(this.userForm.valid);
    this.user.name =this.userForm.get('uname').value;
    this.user.height =this.userForm.get('height').value;
    this.user.weight =this.userForm.get('weight').value;
    this.user.age =this.userForm.get('age').value;
    this.user.gender =this.userForm.get('gender').value;
    this.userService.createUser(this.user);
    this.user.actitivity = this.userForm.get('activity').value;
    var BMR =this.userService.calculateBMR(this.user);
    this.userService.calculateNutrition(this.user);
    console.log(BMR + " kcal");
    
    console.log(this.user);
    return(this.user);

  }
  ngOnInit() {
  }

}
