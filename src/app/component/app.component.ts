import { Component } from '@angular/core';
import { AuthService } from "../service/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styles: []
})
export class AppComponent {
  title = 'app';

  constructor(private authService:AuthService){}


  getLocalUser(){
    return localStorage.getItem('username');
}
  getLocalAuthorization(){
    return localStorage.getItem('authorization');
  }
}
