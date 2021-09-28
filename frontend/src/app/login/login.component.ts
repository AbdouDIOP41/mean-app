import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { TokenStorageService } from '../services/token-storage.service';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';


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
  errorMessage = '';
  roles: any;
  type =  "" ;
  pseudo = "";
  msg = "";

  constructor(private authService: AuthService,
              private tokenStorage: TokenStorageService,
              private userService: UserService,
              private router : Router) { }

  ngOnInit(): void {

      if (this.tokenStorage.getToken()) {

        this.isLoggedIn = true;
        this.router.navigate(['/user']);
        this.type = this.userService.getTypeUser();
        this.pseudo = this.userService.getInfoUser().pseudo;
        this.userService.message = "Login successfull ! ";



       // this.router.navigate( ['/profile'])
      }

  }

  onSubmit(): void {
    const { email, password } = this.form;

    this.authService.login(email, password).subscribe(
      data => {
        if(data.token){
          this.tokenStorage.saveToken(data.token);
          this.isLoggedIn = true;

        }
        else{
          this.isLoggedIn = false;
        }
              //this.roles = this.tokenStorage.getUser().roles;
      },
      err => {
        this.errorMessage = err.error.message;
      }
    );
  }
}
