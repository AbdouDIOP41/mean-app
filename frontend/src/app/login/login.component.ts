import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { TokenStorageService } from '../services/token-storage.service';
import { UserService } from '../services/user.service';
import jwt_decode from "jwt-decode";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: any = {
    email: null,
    password: null
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: any;
  type = "";

  constructor(private authService: AuthService,
              private tokenStorage: TokenStorageService,
              private userService: UserService) { }

  ngOnInit(): void {
      if (this.tokenStorage.getToken()) {

        this.isLoggedIn = true;
        const token = this.tokenStorage.getToken();
        var decoded:any = jwt_decode(token);
        console.log(decoded);

    }
  }

  onSubmit(): void {
    const { email, password } = this.form;

    this.authService.login(email, password).subscribe(
      data => {
        if(data.token){
          this.tokenStorage.saveToken(data.token, data.pseudo, data.id);
          this.isLoginFailed = false;
          this.isLoggedIn = true;
         // this.Location.replaceState('/');
        }
        else{
          this.isLoginFailed = true;
          this.isLoggedIn = false;
        }
              //this.roles = this.tokenStorage.getUser().roles;
      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    );
  }
}
