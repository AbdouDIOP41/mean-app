import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API = 'http://localhost:5000/api/user/';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(email: string, password: string) : Observable<any>{
    return this.http.post(AUTH_API + 'login', {
      email,
      password
    }, httpOptions
    );
  }

  register(pseudo: string, email: string, password: string, typeUser: string): Observable<any> {
    return this.http.post(AUTH_API + 'register', {
      pseudo,
      email,
      password,
      typeUser
    }, httpOptions);
  }
}
