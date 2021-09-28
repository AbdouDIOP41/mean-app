import { Injectable } from '@angular/core';
import jwt_decode from "jwt-decode";

const TOKEN_KEY = 'auth-token';
@Injectable({
  providedIn: 'root',
})
export class TokenStorageService {
  constructor() {}

  signOut(): void {
    return window.sessionStorage.removeItem(TOKEN_KEY);
  }

  public saveToken(token: string): void {
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(): any {
    return window.sessionStorage.getItem(TOKEN_KEY);
  }

  public decodeToken() : any {
    return jwt_decode(this.getToken());
  }
}


