import { Injectable } from '@angular/core';

import { User } from './user';

@Injectable({
   providedIn: 'root'
 })
export class UserService {

    user =new User();
    nutrition = [];

   createUser(user: User) {
      this.user=user;
      return this.user;

   }  

   showUser(){
      console.log(this.user);
      return this.user;
   }

   getNutrition(){
      return this.nutrition;
   }


   calculateBMR(user:User){

      if(user.gender ==='male'){
         user.bmr= 5 + ((9.99) * user.weight) + (6.25 * user.height) - ((4.92) * user.age)
      }
      if(user.gender==='female'){
         user.bmr= ((9.99) * user.weight) + (6.25 * user.height) - ((4.92) * user.age) -161
      }
     
      if(user.actitivity ==='Light Excercise'){
         user.bmr *= 1.2;

      }else if (user.actitivity ==='Medium Excercise'){
         user.bmr *= 1.4;

      }else if (user.actitivity ==='Active'){
         user.bmr *= 1.5;

      }else if (user.actitivity ==='Very Active'){
         user.bmr *= 1.7;

      }
      this.user.bmr = user.bmr;
      return this.user.bmr ;
   }

   calculateNutrition(user:User){
     var protein = 1.5* user.weight;
     var fat = (user.bmr* 0.2)/9;
     var carbs = (user.bmr - protein*4 - fat*9)/4;
     this.nutrition.push(protein);
     this.nutrition.push(fat);
     this.nutrition.push(carbs);
     return this.nutrition;
   
   }
}