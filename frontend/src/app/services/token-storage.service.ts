import { Injectable } from '@angular/core';

const TOKEN_KEY = 'auth-token';
@Injectable({
  providedIn: 'root',
})
export class TokenStorageService {
  constructor() {}

  signOut(): void {
    return window.sessionStorage.removeItem(TOKEN_KEY);
  }

  public saveToken(token: string, pseudo: string, id: string): void {
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(): any {
    return window.sessionStorage.getItem(TOKEN_KEY);
  }
}
