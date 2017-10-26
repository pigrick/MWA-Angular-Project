import { Component } from '@angular/core';
import { AuthService } from "../service/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styles: []
})
<<<<<<< HEAD
export class AppComponent implements DoCheck {
  title = 'Welcome to Our Website';
  loggedin;

  constructor(private authService:AuthService){}

  ngDoCheck(){
    if(this.authService.loggedIn()){
      this.loggedin = true;
    } else {
      this.loggedin = false;
    }
=======
export class AppComponent {
  title = 'app';

  constructor(private authService:AuthService){}


  getLocalUser(){
    return localStorage.getItem('username');
>>>>>>> d3fa164c5d9048275d4af19e115d26571806ec94
  }
  getLocalAuthorization(){
    return localStorage.getItem('authorization');
  }
}
