import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ItemComponent } from './item/item.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';

import { ItemsService } from './services/items.service';
import { UserService } from './services/user.service';
import { AuthService } from './services/auth.service';
import { TokenStorageService } from './services/token-storage.service';

import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { ProfileComponent } from './profile/profile.component';


@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    UserComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    ItemsService,
    UserService,
    AuthService,
    TokenStorageService,
    authInterceptorProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
