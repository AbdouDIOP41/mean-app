import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TokenStorageService } from './token-storage.service';
import jwt_decode from "jwt-decode";

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor(private http: HttpClient, private tokenStorageService: TokenStorageService) {}
    getApiData(){
      return this.http.get('https://jsonplaceholder.typicode.com/photos')
    }

    filterDataByUser(allItems: any){
      const token = this.tokenStorageService.getToken();
      var decoded:any = jwt_decode(token);
      const typeUser = decoded.typeUser
      if(typeUser==="basic"){
        return allItems.slice(0, 20)
      }
      return allItems

    }
}
//fetch('https://jsonplaceholder.typicode.com/todos/1')
  //.then(response => response.json())
  //.then(json => console.log(json))
