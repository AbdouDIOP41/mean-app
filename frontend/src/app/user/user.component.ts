import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  pseudo = "" ;
  type = "";
  message =""
  constructor(private userService : UserService) { }

  ngOnInit(): void {
    this.pseudo = this.userService.getInfoUser().pseudo;
    this.type = this.userService.getTypeUser();
    this.message = this.userService.message;

  }
/*
  public bouttonPremium() : string {
    if( this.type === "basic")
      return "devenir premium";
  }*/

}
