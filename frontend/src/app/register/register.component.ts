import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { TokenStorageService } from '../services/token-storage.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  form: any = {
    pseudo: null,
    email: null,
    password: null,
    typeUser: null
  };
  isSuccessful = false;
  errorMessage = '';
  constructor(
    private authService: AuthService,
    private userService: UserService,
    private tokenStorageService: TokenStorageService,
    private router : Router
  ) {}

  ngOnInit(): void {}

  onSubmit(): void {
    const { pseudo, email, password, typeUser } = this.form;

    this.authService.register(pseudo, email, password, typeUser).subscribe(
      (data) => {
        const token = data.token;
        if (token) {
          this.tokenStorageService.saveToken(token);
          this.isSuccessful = true;
          //window.location.reload();
          this.router.navigate(['/user']);
          console.log(this.userService.getInfoUser());

          this.userService.message = "Your registration is successful !"


        } else {
          this.isSuccessful = false;
        }
      },
      (err) => {
        this.errorMessage = err.error.message;
        this.isSuccessful = false;
      }
    );
  }
}
