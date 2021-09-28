import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TokenStorageService } from './token-storage.service';

const API_URL = 'http://localhost:5000/api/user/';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(
    private http: HttpClient,
    private tokenStorageService: TokenStorageService
  ) {}

  message = "" ;
  getTypeUser(){
    return this.getInfoUser().typeUser;
  }

  getInfoUser(){
    const {id, pseudo, typeUser} = this.tokenStorageService.decodeToken();
    //const decoded = {id, pseudo, typeUser}
    console.log(id, pseudo, typeUser)
    return {
      id,
      pseudo,
      typeUser
    };
  }

}


