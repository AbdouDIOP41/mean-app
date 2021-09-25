import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { TokenStorageService } from '../services/token-storage.service';

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
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  constructor(
    private authService: AuthService,
    private tokenStorageService: TokenStorageService
  ) {}

  ngOnInit(): void {}

  onSubmit(): void {
    const { pseudo, email, password, typeUser } = this.form;

    this.authService.register(pseudo, email, password, typeUser).subscribe(
      (data) => {
        const token = data.token;
        if (token) {
          this.tokenStorageService.saveToken(token, data.pseudo, data.id);
          this.isSuccessful = true;
          this.isSignUpFailed = false;
        } else {
          this.isSuccessful = false;
          this.isSignUpFailed = true;
        }
      },
      (err) => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
  }
}
