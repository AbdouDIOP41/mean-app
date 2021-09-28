import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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

  getUserFree(): Observable<any> {
    return this.http.get(API_URL + 'user_free', { responseType: 'text' });
  }

  getUserPremium(){
    const token = this.tokenStorageService.getToken();
    var decoded:any = jwt_decode(token);
    console.log(decoded);
   // return decoded
  }
  getPublicContent(): Observable<any> {
    return this.http.get(API_URL + 'all', { responseType: 'text' });
  }


  getUserBoard(): Observable<any> {
    return this.http.get(API_URL + 'user', { responseType: 'text' });
  }

  getModeratorBoard(): Observable<any> {
    return this.http.get(API_URL + 'mod', { responseType: 'text' });
  }

  getAdminBoard(): Observable<any> {
    return this.http.get(API_URL + 'admin', { responseType: 'text' });
  }
}
function jwt_decode(token: any): any {
  throw new Error('Function not implemented.');
}

