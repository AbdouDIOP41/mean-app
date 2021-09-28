import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  [x: string]: any;
  typeUser = {
    BASIC: 'basic',
    PREMIUM: 'premium',
  }

  constructor(private http: HttpClient, private userService : UserService) {}
    getApiData(){
      return this.http.get('https://jsonplaceholder.typicode.com/photos')
    }

    filterDataByUser(allItems: any){
      if(this.userService.getTypeUser() === this.typeUser.BASIC){
        return allItems.slice(0, 20)
      }
      return allItems.slice(0, 50)
    }
}
