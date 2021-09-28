import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from './services/token-storage.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  //private permission: string[] = [];
  isLoggedIn = false;
  UserPremium = false;
  pseudo?: string;

  constructor(private tokenStorageService: TokenStorageService) { }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    //window.location.reload();
  }

  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
  }
}
