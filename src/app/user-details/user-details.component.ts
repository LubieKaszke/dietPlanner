import { Component, OnInit, Input } from '@angular/core';
import { User } from '../calculator/user';
import {UserService} from '../calculator/user-service'

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  constructor(private userService:UserService) { }
  user: User;
  nutrition: number[];
  ngOnInit() {
    this.getUser();
    this.getNutrition();
  }
    
  getUser(){
     this.user = this.userService.showUser();
  }

  getNutrition(){
    this.nutrition = this.userService.nutrition;
    console.log(this.nutrition);
  }

}
